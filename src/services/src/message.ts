import { Chat } from "whatsapp-web.js";
import { StateConversation } from "../../actions";
import { IMenu } from "../../types/menu.type";
import { Flow } from "../../flow";

export class MessageService {
  static startService = async (chat: Chat) => {
    await chat.sendStateTyping();
    await chat.sendMessage("*Matheus* iniciou o seu atendimento!");
    await StateConversation.serviceConversation(chat.id._serialized);
    await chat.clearState();
  };

  static finishService = async (chat: Chat) => {
    await chat.sendStateTyping();
    await chat.sendMessage(
      "Encerrando atendimento...\nA Kali Gráfica agradece o seu contato!"
    );
    await StateConversation.deleteConversation(chat.id._serialized);
    await chat.clearState();
  };
}

export class MessageMenu {
  static firstMenu = async (chat: Chat) => {
    await StateConversation.changeMenuConversation(
      chat.id._serialized,
      [1, 10]
    );
    await StateConversation.changeFirstTimeConversation(chat.id._serialized);
    await chat.sendMessage(Flow.firstMessage);
    await chat.sendMessage(
      this.makeMenuMessage(Flow.menu.filter((menu) => menu.id < 10))
    );
    await chat.clearState();
  };

  static filterMenu = (start: number, end: number) => {
    const menu = Flow.menu.filter((item) => item.id >= start && item.id < end);

    return menu;
  };

  static invalidChoice = async (chat: Chat, menu: IMenu[]) => {
    await chat.sendMessage("Opção inválida\nEscolha uma opção");
    await chat.sendMessage(this.makeMenuMessage(menu));
  };

  static makeMenuMessage = (items: IMenu[]) => {
    const menuArr = items.map((menu) => menu.message);

    let menu = menuArr.join("\n");

    return menu;
  };

  static sendSubmenu = async (chat: Chat, chosenOption: IMenu) => {
    const minMenu = Math.floor((chosenOption.id * 10) / 10) * 10;
    const maxMenu = Math.floor((chosenOption.id * 10 + 10) / 10) * 10;

    await StateConversation.changeMenuConversation(chat.id._serialized, [
      minMenu,
      maxMenu,
    ]);

    const newMenu = this.filterMenu(minMenu, maxMenu);

    await chat.sendMessage(chosenOption.message);
    await chat.sendMessage(this.makeMenuMessage(newMenu));
  };
}
