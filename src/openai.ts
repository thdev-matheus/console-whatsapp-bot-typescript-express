import { createReadStream } from "fs";
import { OpenAI } from "openai";
import path from "path";

const openaiApiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: openaiApiKey,
  timeout: 60000,
});

const createTranscription = async (fileName: string) => {
  const pathFile = path.join(`${__dirname}/utils/src/resources/`, fileName);

  try {
    const transcription = await openai.audio.transcriptions.create({
      file: createReadStream(pathFile),
      model: "whisper-1",
      language: "pt",
      response_format: "text",
    });

    return transcription;
  } catch (error) {
    console.log(error);
    console.log("erro de trascrição =>" + error);

    return "Conversão falhou 😥";
  }
};

export { createTranscription };
