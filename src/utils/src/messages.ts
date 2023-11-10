import { Message } from "whatsapp-web.js";

export const isAudioAndNotGroup = async (msg: Message) => {
  return (
    msg.hasMedia &&
    !(await msg.getChat()).isGroup &&
    (msg.type == "audio" || msg.type == "ptt")
  );
};
