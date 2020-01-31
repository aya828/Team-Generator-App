// const EmployeeTest = require('../test/employee.test');
const fs = require('fs');

class Employee {
  constructor (name, id, title, email) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.title;
  }

  writeToTextFile(){
    const textData = `
      Role: ${this.getRole()}
      Name: ${this.getName()}
      ID: ${this.getId()}
      Email: ${this.getEmail()}
    `
    fs.appendFile("../output/team.txt", textData, "utf8", function(err) {

      if (err) {
        return console.log(err);
      }
  
    });
  }
}

module.exports = Employee;