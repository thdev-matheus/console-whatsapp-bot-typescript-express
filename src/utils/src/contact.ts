import { Client, Contact } from "whatsapp-web.js";

export const contactYourself = async (client: Client) => {
  const phoneNumber = process.env.PHONE_NUMBER;
  const contacts = await client.getContacts();
  let contact: Contact | undefined;

  contacts.forEach((cont) => {
    if (cont.number === phoneNumber) {
      contact = cont;
    }
  });

  return contact;
};
