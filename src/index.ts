import "dotenv/config";
import { client } from "./clientWhats";
import { StateConversation, Flow, makeMenu } from "./utils";

client.on("message", async (msg) => {
  const chat = await msg.getChat();
  if (chat.isGroup) {
    return;
  }

  const contact = await chat.getContact();

  if (contact.name == "Jess") {
    await chat.sendSeen();
    await chat.sendStateTyping();
    const conversation = await StateConversation.loadState(chat);

    if (conversation.firstTime || conversation.menuChoose === "0") {
      await chat.sendMessage(Flow.firstMessage);
      await chat.sendMessage(makeMenu(Flow.flow));
      await chat.clearState();
    } else {
    }
  }
});

client.initialize();
