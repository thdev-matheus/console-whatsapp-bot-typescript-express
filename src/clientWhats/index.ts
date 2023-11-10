import qrCode from "qrcode-terminal";
import { Client, LocalAuth } from "whatsapp-web.js";

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrCode.generate(qr);
});

client.on("ready", () => {
  console.log("Cliente Conectado! 🤓");
});

export { client };
