import "dotenv/config";
import { client } from "./clientWhats";
import {
  StateConversation,
  Flow,
  makeMenu,
  makeMessage,
  makeAnswer,
} from "./utils";

client.on("message", async (msg) => {
  const chat = await msg.getChat();
  if (chat.isGroup) {
    return;
  }

  const contact = await chat.getContact();

  if (contact.name == "Jess") {
    makeMessage(msg);
  }
});

client.on("message_create", async (msg) => {
  const chat = await msg.getChat();

  if (chat.isGroup) {
    return;
  }

  if (msg.body.toLowerCase().trim() === "olá") {
    console.log("em atendimento");

    makeAnswer(msg);
  }
});

client.initialize();
