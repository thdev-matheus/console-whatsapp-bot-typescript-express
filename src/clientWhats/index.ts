import qrCode from "qrcode-terminal";
import { Client, LocalAuth } from "whatsapp-web.js";

export const client = new Client({
  authStrategy: new LocalAuth(),
});
