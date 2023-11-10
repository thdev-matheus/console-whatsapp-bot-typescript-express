import qrCode from "qrcode-terminal";
import { Client, LocalAuth } from "whatsapp-web.js";

export const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrCode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Cliente Conectado! 🤓");
});
