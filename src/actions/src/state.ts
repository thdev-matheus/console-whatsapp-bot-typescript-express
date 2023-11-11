import { readFile, writeFile } from "fs/promises";
import { Chat } from "whatsapp-web.js";
import path from "path";
import {
  IChatId,
  IStateConversation,
} from "../../types/stateConversation.type";

export class StateConversation {
  static stateFilePath: string = path.join(
    __dirname + "/../../state",
    "conversationState.json"
  );

  static saveState = async (data: IStateConversation[]) => {
    await writeFile(this.stateFilePath, JSON.stringify(data, null, 2), "utf-8");
  };

  static loadState = async (id: IChatId) => {
    const data: IStateConversation[] = JSON.parse(
      await readFile(this.stateFilePath, "utf-8")
    );

    const conversationIndex = data.findIndex(
      (conv) => conv.id._serialized === id._serialized
    );

    if (conversationIndex !== -1) {
      data[conversationIndex].firstTime &&
        ((data[conversationIndex].firstTime = false),
        await this.saveState(data));

      return data[conversationIndex];
    } else {
      const newConversation = await this.saveNewConversation(id);

      return newConversation;
    }
  };

  static saveNewConversation = async (id: IChatId) => {
    const data: IStateConversation[] = JSON.parse(
      await readFile(this.stateFilePath, "utf-8")
    );

    const newConversation: IStateConversation = {
      id,
      firstTime: true,
      finished: false,
      menuChoose: [1, 10],
      inService: false,
    };

    data.push(newConversation);

    await this.saveState(data);

    return newConversation;
  };

  static changeMenuConversation = async (
    idSerialized: string,
    newMenuChoose: [number, number]
  ) => {
    const data: IStateConversation[] = JSON.parse(
      await readFile(this.stateFilePath, "utf-8")
    );

    const conversationIndex = data.findIndex(
      (conv) => conv.id._serialized === idSerialized
    );

    if (conversationIndex !== -1) {
      data[conversationIndex].menuChoose = newMenuChoose;
      await this.saveState(data);
    }
  };

  static serviceConversation = async (idSerialized: string) => {
    const data: IStateConversation[] = JSON.parse(
      await readFile(this.stateFilePath, "utf-8")
    );

    const conversationIndex = data.findIndex(
      (conv) => conv.id._serialized === idSerialized
    );

    if (conversationIndex !== -1) {
      data[conversationIndex].inService = true;
      await this.saveState(data);
    }
  };

  static finishConversation = async (idSerialized: string) => {
    const data: IStateConversation[] = JSON.parse(
      await readFile(this.stateFilePath, "utf-8")
    );

    const conversationIndex = data.findIndex(
      (conv) => conv.id._serialized === idSerialized
    );

    if (conversationIndex !== -1) {
      data[conversationIndex].finished = true;
      await this.saveState(data);
    }
  };

  static deleteConversation = async (idSerialized: string) => {
    const data: IStateConversation[] = JSON.parse(
      await readFile(this.stateFilePath, "utf-8")
    );

    const conversationIndex = data.findIndex(
      (conv) => conv.id._serialized === idSerialized
    );

    if (conversationIndex !== -1) {
      data.splice(conversationIndex, 1);
      await this.saveState(data);
    }
  };
}
