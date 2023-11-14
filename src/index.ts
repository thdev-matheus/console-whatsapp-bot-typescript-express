import "dotenv/config";
import { client } from "./clientWhats";
import { makeMessage, makeAnswer } from "./actions";

client.on("message", async (msg) => {
  const chat = await msg.getChat();
  if (chat.isGroup) {
    return;
  }

  // const contact = await chat.getContact();
  makeMessage(msg);

  // if (contact.name == "Jess" || contact.name === "Will VC") {
  //   makeMessage(msg);
  // }
});

client.on("message_create", async (msg) => {
  const chat = await msg.getChat();

  if (chat.isGroup) {
    return;
  }

  makeAnswer(msg);
});

client.initialize();
