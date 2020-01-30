const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./employee.js');
const Manager = require('./manager.js');
const Engineer = require('./engineer.js');
const Intern = require('./intern.js');

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
