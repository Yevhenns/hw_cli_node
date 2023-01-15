const path = require("path");
const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");

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
    console.log(contactById);
    return contactById;
  } catch {
    (err) => console.log(err.message);
  }
}

async function removeContact(contactId) {
  try {
    const array = await listContacts();
    const newArray = array.filter((item) => item.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(newArray));
    return newArray;
  } catch {
    (err) => console.log(err.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const array = await listContacts();
    const newContact = { id: uuidv4(), name, email, phone };
    const newArray = [...array, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(newArray));
    return newArray;
  } catch {
    (err) => console.log(err.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
