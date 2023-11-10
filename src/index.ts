import "dotenv/config";
import { writeFile } from "fs";
import { createTranscription } from "./openai";
import { client } from "./clientWhats";

const groupName = process.env.GROUP_NAME;
const phoneNumber = process.env.PHONE_NUMBER;
