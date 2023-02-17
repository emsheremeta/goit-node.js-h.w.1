
const fs = require("fs").promises;
const path=require("path");
const contactsPath = ("./db/contacts.json");


 async function listContacts()  {
  try {
    const text = await fs.readFile(contactsPath, "utf-8");
    console.log(text);
  } catch (e) {
    console.error(e);
  };
  };
  
  async function getContactById(contactId) {
  try {
    const text = await fs.readFile(contactsPath, "utf-8");
    let contacts = JSON.parse(text);
    let contact = contacts.filter(c => Number(c.id) === contactId);
    console.log(contact);
    return contact;
  } catch (e) {
    console.error(e)
  };
  };
  
  async function removeContact(contactId) {
try{
  const text = await fs.readFile(contactsPath, "utf-8");
  let contacts = JSON.parse(text);
  let newContacts = contacts.filter(c => Number(c.id) !== contactId);
  console.log(newContacts)
  await fs.writeFile(contactsPath + '_new.json', JSON.stringify(newContacts));
} catch(e) {
  console.error(e);
};
    
  };
  
  async function addContact(name, email, phone) {
    try{
      const text = await fs.readFile(contactsPath, "utf-8");
    let contacts = JSON.parse(text);
    contacts.push({
      id: contacts[contacts.length],
      name: name,
      email: email,
      phone: phone
    });
    await fs.writeFile(contactsPath + '_new.json', JSON.stringify(contacts));
    } catch (e) {
      console.error(e);
    };
  };

  module.exports.listContacts = listContacts;
  module.exports.getContactById = getContactById;
  module.exports.removeContact = removeContact;
  module.exports.addContact = addContact;