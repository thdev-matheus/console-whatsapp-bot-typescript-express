import "dotenv/config";
import { client } from "./clientWhats";
import { createTranscription } from "./openai";
import {
  convertBase64ToAudio,
  isAudioAndNotGroup,
  sendMessageOnGroup,
} from "./utils";
import { v4 as uuid } from "uuid";

client.on("message", async (msg) => {
  if (await isAudioAndNotGroup(msg)) {
    const media = await msg.downloadMedia();

    const fileName = media.filename || "audio";

    convertBase64ToAudio(media.data, fileName);
  }
});

client.on("message_create", async (msg) => {
  if (msg.body == "/toText") {
    const replyedAudioOwner = await client.getContactById(msg.to);
    const replyedOwnerName = replyedAudioOwner.name;

    const textAudio = await createTranscription(`audio.ogg`);

    await sendMessageOnGroup(client, textAudio, replyedOwnerName!);
    await msg.delete(true);
  }
});

client.initialize();
