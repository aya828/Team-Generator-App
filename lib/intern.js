const Employee = require('./employee.js');
const inquirer = require('inquirer');
// const InternTest = require('../test/intern.test');
const fs = require('fs');


class Intern extends Employee {
  constructor(school) {
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
    `
    let path = __dirname + "/hw08/output/team.txt";

    fs.writeFile(path, textData, utf8, function(err) {

      if (err) {
        return console.log(err);
      }
  
      newTeamMember();
  
    });
  }
}



module.exports = Intern;