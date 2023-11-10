import { Message, Client, Chat } from "whatsapp-web.js";
import "dotenv/config";
import { contactYourself } from "./contact";
import { Transcription } from "openai/resources/audio/transcriptions";

export const isAudioAndNotGroup = async (msg: Message) => {
  return (
    msg.hasMedia &&
    !(await msg.getChat()).isGroup &&
    (msg.type == "audio" || msg.type == "ptt")
  );
};

export const sendMessageOnGroup = async (
  client: Client,
  msg: string | Transcription,
  contactSentMessage: string
) => {
  const chats = await client.getChats();
  const groupName = process.env.GROUP_NAME;

  let findGroupBot = false;
  let chatGroupBot: Chat | undefined | null;

  chats.map((chat) => {
    if (chat.isGroup && chat.name === groupName) {
      chatGroupBot = chat;
      findGroupBot = true;
    }
  });

  if (findGroupBot && chatGroupBot) {
    chatGroupBot.sendMessage(
      `*🤖 Bot*\n*Áudio de ${contactSentMessage}:*\n${msg}`
    );
  } else {
    const contact = await contactYourself(client);
    await client.createGroup(groupName!, contact);
  }
};
