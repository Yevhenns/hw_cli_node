const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath);
    const array = JSON.parse(contacts);
    return array;
  } catch {
    (err) => console.log(err.message);
  }
}

async function getContactById(contactId) {
  try {
    const array = await listContacts();
    const contactById = array.find((obj) => obj.id === contactId);
    return contactById;
  } catch {
    (err) => console.log(err.message);
  }
}

async function removeContact(contactId) {
  try {
    const array = await listContacts();
    const newArray = array.filter((item) => item.id !== contactId);
    console.log(newArray);
    return newArray;
  } catch {
    (err) => console.log(err.message);
  }
}
removeContact("10");

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
