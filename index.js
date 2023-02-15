const contactLib = require('./contacts');
const argv = require("yargs").argv;



function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case "list":
        contactLib.listContacts()
        break;
  
      case "get":
        console.log(id, typeof id)
        contactLib.getContactById(id)
        break;
  
      case "add":
        contactLib.addContact(name, email, phone);
        break;
  
      case "remove":
        contactLib.removeContact(id);
        break;
  
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  }
  
  invokeAction(argv);