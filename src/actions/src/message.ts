import { IMenu } from "../../types/menu.type";
import { Message } from "whatsapp-web.js";
import { StateConversation } from "./state";
import { MessageMenu, MessageService } from "../../services";

export const makeAnswer = async (msg: Message) => {
  const chat = await msg.getChat();

  if (msg.body.toLowerCase().trim() === "obrigado!") {
    MessageService.finishService(chat);
  } else if (msg.body.toLowerCase().trim() === "olá!") {
    MessageService.startService(chat);
  } else if (msg.body === "/p") {
    await msg.delete(true);
    await chat.sendMessage(
      "Iniciando uma conversa privada\nAtivando protocolo de segurança"
    );
    await StateConversation.loadState(chat.id);
    StateConversation.finishConversation(chat.id._serialized);
  } else if (msg.body === "/x") {
    await msg.delete(true);
    await chat.sendMessage(
      "Encerrando uma conversa privada\nDesativando protocolo de segurança"
    );
    StateConversation.deleteConversation(chat.id._serialized);
  }
};

export const makeMessage = async (msg: Message) => {
  const chat = await msg.getChat();

  const conversation = await StateConversation.loadState(chat.id);

  if (msg.body.toLowerCase().trim() === "encerrar") {
    await MessageService.finishService(chat);
    return;
  }

  if (conversation.finished || conversation.inService) {
    return;
  }

  await chat.sendSeen();
  await chat.sendStateTyping();

  // caso seja a primeira vez ou o menu seja o inicial
  if (conversation.firstTime) {
    await MessageMenu.firstMenu(chat);
    return;
  }

  const oldMenu = MessageMenu.filterMenu(
    conversation.menuChoose[0],
    conversation.menuChoose[1]
  );

  if (!conversation.finished && isNaN(+msg.body)) {
    await MessageMenu.invalidChoice(chat, oldMenu);
    return;
  }

  // captando a opção escolhida
  let chosenOption: IMenu;

  // lógica para pegar a opção correta devido a estrutura que foi criado menu
  if (conversation.menuChoose[0] < 10) {
    chosenOption = oldMenu.find((item) => item.id === parseInt(msg.body));
  } else {
    chosenOption = oldMenu.find(
      (item) => item.id === parseInt(msg.body) + conversation.menuChoose[0]
    );
  }

  // caso de opção inválida
  if (!chosenOption) {
    await MessageMenu.invalidChoice(chat, oldMenu);
    return;
  }

  // caso de resposta em que o menu pode ser enviado novamente
  if (
    chosenOption.id === 6 ||
    chosenOption.id === 5 ||
    chosenOption.id === 24 ||
    chosenOption.id === 118 ||
    chosenOption.id === 127
  ) {
    await chat.sendMessage(chosenOption.message);
    await chat.sendMessage(chosenOption.action);
    await chat.sendMessage("Podemos te ajudar em algo mais?");
    await chat.sendMessage(MessageMenu.makeMenuMessage(oldMenu));
    return;
  }

  // caso de escoha por encerrar o atendimento
  if (chosenOption.id === 7) {
    await chat.sendMessage(chosenOption.message);
    await chat.sendMessage(chosenOption.action);
    await StateConversation.deleteConversation(chat.id._serialized);
    return;
  }

  // caso de escolha para voltar ao menu principal pela lógica de criação dos menus
  if (
    chosenOption.id === 119 ||
    chosenOption.id === 128 ||
    chosenOption.id === 13 ||
    chosenOption.id === 25 ||
    chosenOption.id === 35
  ) {
    await chat.sendMessage(chosenOption.message);
    await MessageMenu.firstMenu(chat);
    await StateConversation.changeMenuConversation(
      chat.id._serialized,
      [1, 10]
    );
    return;
  }

  // caso de o menu ser o fim da linha de fluxo e tenha uma mensagem de ação
  if (chosenOption.action) {
    await chat.sendMessage(chosenOption.message);
    await chat.sendMessage(chosenOption.action);
    await StateConversation.serviceConversation(chat.id._serialized);
    return;
  }

  // caso de o menu conter submenus
  MessageMenu.sendSubmenu(chat, chosenOption);
};
