const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("./db/contacts.json");

function listContacts() {
    fs.readFile("contscts.json")
        .then((data) => console.log(data.toString()))
        .catch((err) => console.log(err.message));
}

function getContactById(contactId) {
    // ...твій код
}

function removeContact(contactId) {
    // ...твій код
}

function addContact(name, email, phone) {
    // ...твій код
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};
