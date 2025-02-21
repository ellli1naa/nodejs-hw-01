import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    return count;
  } catch (error) {
    console.error('Помилка підрахунку контактів:', error.message);
  }
};

console.log(await countContacts());
