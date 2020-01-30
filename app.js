const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: "list",
      name: "role",
      message: "What is your role?",
      choices: ['Manager', 'Employee', 'Engineer', 'Intern']
    },
    {
      type: "input",
      name: "password",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "ID",
      message: "What is your ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    }
  ])
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });

class Employee {
  constructor (name, id, title) {
    this.name = name;
    this.id = id;
    this.title = title;
  }

  getName() {

  }

  getId() {

  }

  getEmail() {

  }

  getRole() {

    // RETURNS 'EMPLOYEE'
  }
}

class Manager extends Employee {
  constructor(officeNumber) {
    super();
    this.officeNumber = officeNumber;
  }
  
  getRole() {

    // OVERRIDDEN TO RETURN 'MANAGER'
  }
}

class Engineer extends Employee {
  constructor(github) {
    super();
    // GITHUB USERNAME
    this.github = github;
  }

  getGithub() {

  }

  getRole() {

    // OVERRIDDEN TO RETURN 'ENGINEER'
  }
}

class Intern extends Employee {
  constructor(school) {
    super();
    this.school = school;
  }

  getSchool() {

  }

  getRole() {

    //OVERRIDDEN TO RETURN 'INTERN'
  }
}