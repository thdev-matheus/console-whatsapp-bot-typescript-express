import { readFile, writeFile } from "fs/promises";
import { Chat } from "whatsapp-web.js";
import path from "path";
import { IStateConversation } from "../../types/stateConversation.type";

export class StateConversation {
  static stateFilePath: string = path.join(
    __dirname + "/../../state",
    "conversationState.json"
  );

  static saveState = async (data: IStateConversation[]) => {
    await writeFile(this.stateFilePath, JSON.stringify(data, null, 2), "utf-8");
  };

  static readState = async (chat: Chat) => {
    const data: IStateConversation[] = JSON.parse(
      await readFile(this.stateFilePath, "utf-8")
    );

    const conversationIndex = data.findIndex(
      (conv) => conv.id._serialized === chat.id._serialized
    );

    if (conversationIndex === -1) {
      return null;
    } else {
      return data[conversationIndex];
    }
  };

  static loadState = async (chat: Chat) => {
    const data: IStateConversation[] = JSON.parse(
      await readFile(this.stateFilePath, "utf-8")
    );

    const conversationIndex = data.findIndex(
      (conv) => conv.id._serialized === chat.id._serialized
    );

    if (conversationIndex !== -1) {
      data[conversationIndex].firstTime = false;

      await this.saveState(data);

      return data[conversationIndex];
    } else {
      const newConversation: IStateConversation = {
        id: chat.id,
        firstTime: true,
        finished: false,
        clientWaiting: false,
        menuChoose: [1, 10],
        inService: false,
      };

      await this.saveNewConversation(newConversation);

      return newConversation;
    }
  };

  static saveNewConversation = async (conversation: IStateConversation) => {
    const data: IStateConversation[] = JSON.parse(
      await readFile(this.stateFilePath, "utf-8")
    );

    data.push(conversation);

    await this.saveState(data);
  };

  static changeMenuConversation = async (
    conversation: IStateConversation,
    newMenuChoose: [number, number]
  ) => {
    const data: IStateConversation[] = JSON.parse(
      await readFile(this.stateFilePath, "utf-8")
    );

    const conversationIndex = data.findIndex(
      (conv) => conv.id._serialized === conversation.id._serialized
    );

    data[conversationIndex].menuChoose = newMenuChoose;

    await this.saveState(data);
  };

  static finishConversation = async (
    conversation: IStateConversation,
    wait?: boolean
  ) => {
    const data: IStateConversation[] = JSON.parse(
      await readFile(this.stateFilePath, "utf-8")
    );

    const conversationIndex = data.findIndex(
      (conv) => conv.id._serialized === conversation.id._serialized
    );

    if (wait) {
      data[conversationIndex].finished = true;
      data[conversationIndex].clientWaiting = wait || false;
      data[conversationIndex].menuChoose = [1, 10];
      data[conversationIndex].firstTime = false;
      data[conversationIndex].inService = false;
    } else {
      data.splice(conversationIndex, 1);
    }

    await this.saveState(data);
  };

  static conversationInService = async (conversation: IStateConversation) => {
    const data: IStateConversation[] = JSON.parse(
      await readFile(this.stateFilePath, "utf-8")
    );

    const conversationIndex = data.findIndex(
      (conv) => conv.id._serialized === conversation.id._serialized
    );

    data[conversationIndex].inService = true;

    await this.saveState(data);
  };
}
