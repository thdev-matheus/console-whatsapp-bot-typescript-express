import { IMenu } from "../../types/menu.type";
import { Message } from "whatsapp-web.js";
import { StateConversation } from "./state";
import { Flow } from "./flow";

export const makeAnswer = async (msg: Message) => {
  const chat = await msg.getChat();

  const conversation = await StateConversation.readState(chat);

  if (
    conversation &&
    (msg.body.toLowerCase().trim() === "/obg" || msg.body === "/reset")
  ) {
    await msg.delete(true);
    await chat.sendStateTyping();
    await chat.sendMessage(
      "Encerrando atendimento...\nA Kali Gráfica agradece o seu contato!"
    );
    await StateConversation.finishConversation(conversation);
    await chat.clearState();
    return;
  } else if (conversation && !conversation.inService) {
    await StateConversation.conversationInService(conversation);
  }
};

export const makeMessage = async (msg: Message) => {
  const chat = await msg.getChat();

  const flow = Flow.flow;

  const conversation = await StateConversation.loadState(chat);

  if (conversation.clientWaiting || conversation.inService) {
    return;
  }

  await chat.sendSeen();
  await chat.sendStateTyping();

  // caso seja a primeira vez ou o menu seja o inicial
  if (conversation.firstTime) {
    await chat.sendMessage(Flow.firstMessage);
    await chat.sendMessage(makeMenu(flow.filter((menu) => menu.id < 10)));
    await chat.clearState();
    return;
  } else if (msg.body.toLowerCase().trim() === "encerrar") {
    await chat.sendMessage(
      "Encerrando atendimento...\nA Kali Gráfica agradece o seu contato!"
    );
    StateConversation.finishConversation(conversation);
    await chat.clearState();
    return;
  }

  const oldMenu = flow.filter(
    (item) =>
      item.id >= conversation.menuChoose[0] &&
      item.id < conversation.menuChoose[1]
  );

  if (!conversation.finished && isNaN(+msg.body)) {
    await chat.sendMessage("Opção inválida\nEscolha uma opção");
    await chat.sendMessage(makeMenu(oldMenu));
    return;
  }

  let chooseOption: IMenu;

  if (conversation.menuChoose[0] < 10) {
    chooseOption = oldMenu.find((item) => item.id === parseInt(msg.body));
  } else {
    chooseOption = oldMenu.find(
      (item) => item.id === parseInt(msg.body) + conversation.menuChoose[0]
    );
  }

  if (!chooseOption) {
    await chat.sendMessage("Opção inválida\nEscolha uma opção");
    await chat.sendMessage(makeMenu(oldMenu));
    return;
  } else if (chooseOption.id === 6 || chooseOption.id === 5) {
    await chat.sendMessage(chooseOption.action);
    await chat.sendMessage("Podemos te ajudar em algo mais?");
    await chat.sendMessage(makeMenu(oldMenu));
    return;
  } else if (chooseOption.id === 7) {
    await chat.sendMessage(chooseOption.action);
    await StateConversation.finishConversation(conversation);
    return;
  } else if (
    chooseOption.id === 117 ||
    chooseOption.id === 125 ||
    chooseOption.id === 13 ||
    chooseOption.id === 25 ||
    chooseOption.id === 35
  ) {
    const newMenu = flow.filter((item) => item.id >= 1 && item.id < 10);

    await StateConversation.changeMenuConversation(conversation, [1, 10]);

    await chat.sendMessage(chooseOption.message);
    await chat.sendMessage(makeMenu(newMenu));
    return;
  } else if (chooseOption.action) {
    await chat.sendMessage(chooseOption.action);
    await StateConversation.finishConversation(conversation, true);
    return;
  } else {
    const minMenu = Math.floor((chooseOption.id * 10) / 10) * 10;
    const maxMenu = Math.floor((chooseOption.id * 10 + 10) / 10) * 10;

    await StateConversation.changeMenuConversation(conversation, [
      minMenu,
      maxMenu,
    ]);

    const newMenu = flow.filter(
      (item) => item.id >= minMenu && item.id < maxMenu
    );

    await chat.sendMessage(chooseOption.message);
    await chat.sendMessage(makeMenu(newMenu));
  }
};

export const makeMenu = (items: IMenu[]) => {
  const menuArr = items.map((menu) => menu.message);

  let menu = menuArr.join("\n");

  return menu;
};
