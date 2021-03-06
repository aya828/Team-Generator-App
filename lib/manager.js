const Employee = require('./employee.js');
// const ManagerTest = require('../test/manager.test');
const fs = require('fs');

class Manager {
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getName(){
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getofficeNum(){
    return this.officeNumber;
  }
  
  writeToTextFile(){
    const textData = `
      Team:
      ==============================
      Role: ${this.getRole()}
      Name: ${this.getName()}
      ID: ${this.getId()}
      Email: ${this.getEmail()}
      Office Number: ${this.getofficeNum()}
      ------------------------------
    `
    fs.writeFile('./output/team.txt', textData, "utf8", function(err) {

      if (err) {
        return console.log(err);
      }
    });
  }
}

module.exports = Manager;