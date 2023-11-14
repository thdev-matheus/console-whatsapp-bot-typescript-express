import "dotenv/config";
import { client } from "./clientWhats";
import { makeMessage, makeAnswer } from "./actions";
import express from "express";
import qrcode from "qrcode-generator";
import { connectedClient, withQrCode, withoutQrCode } from "./responses";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

let QRCODE: string;

client.on("qr", (qr) => {
  QRCODE = qr;
});

client.on("ready", () => {
  console.log("Cliente Conectado! 🤓");
});

client.on("message", async (msg) => {
  const chat = await msg.getChat();
  if (chat.isGroup) {
    return;
  }

  makeMessage(msg);
});

client.on("message_create", async (msg) => {
  const chat = await msg.getChat();

  if (chat.isGroup) {
    return;
  }

  makeAnswer(msg);
});

app.get("", async (req, res) => {
  const stateClient = await client.getState();

  if (stateClient === "CONNECTED") {
    const response = connectedClient();

    return res.send(response);
  } else if (QRCODE) {
    const typeNumber = 20;
    const errorCorrectionLevel = "L";
    const qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(QRCODE);
    qr.make();

    const response = withQrCode(qr.createImgTag);

    return res.send(response);
  } else {
    const response = withoutQrCode();

    return res.send(response);
  }
});

client.initialize();

app.listen(PORT, () => {
  console.log(`app iniciado na porta: ${PORT}`);
});
