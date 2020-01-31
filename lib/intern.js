const Employee = require('./employee.js');
const InternTest = require('../test/intern.test');
const fs = require('fs');


class Intern extends Employee {
  constructor(name, id, title, school) {
    super(name, id, title);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

  appendToTextFile(){
    const textData = `
      Role: ${this.getRole()}
      Name: ${this.getName()}
      ID: ${this.getId()}
      Email: ${this.getEmail()}
      School: ${this.getSchool()}
      ------------------------------
    `

    fs.appendFile('./output/team.txt', textData, "utf8", function(err) {

      if (err) {
        return console.log(err);
      }
  
    });
  }
}



module.exports = Intern;