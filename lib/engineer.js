const Employee = require('./employee.js');
const EngineerTest = require('../test/engineer.test');
const fs = require('fs');

class Engineer extends Employee {
  constructor(name, id, title, github) {
    super(name, id, title);
    // GitHub username
    this.github = github;
  }

  getGithub() {
    return this.github
  }

  getRole() {
    return "Engineer"
  }

  appendToTextFile(){
    const textData = `
      Role: ${this.getRole()}
      Name: ${this.getName()}
      ID: ${this.getId()}
      Email: ${this.getEmail()}
      GitHub: ${this.getGithub()}
      ------------------------------
    `

    fs.appendFile('./output/team.txt', textData, "utf8", function(err) {

      if (err) {
        return console.log(err);
      }
  
    });
  }
}

module.exports = Engineer;
