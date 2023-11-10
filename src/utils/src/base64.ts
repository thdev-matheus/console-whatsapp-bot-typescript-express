import { writeFile } from "fs";

export const convertBase64ToAudio = (base64Content: string, name: string) => {
  const binaryData = Buffer.from(base64Content, "base64");
  const outputPath = `${__dirname}/resources/${name}.ogg`;

  writeFile(outputPath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Erro ao salvar o arquivo de áudio:", err);
    } else {
      console.log("Arquivo de áudio salvo com sucesso em " + outputPath);
    }
  });
};
