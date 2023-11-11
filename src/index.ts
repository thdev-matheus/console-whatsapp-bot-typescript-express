import "dotenv/config";
import { client } from "./clientWhats";
import { makeMessage, makeAnswer } from "./actions";

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

  makeAnswer(msg);
});

client.initialize();
