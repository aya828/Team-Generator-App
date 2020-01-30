const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const questions = [
    {
      type: "list",
      name: "title",
      message: "What is your role?",
      choices: ['Manager', 'Employee', 'Engineer', 'Intern']
    },
    {
      type: "input",
      name: "name",
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
  ]

  inquirer.prompt(questions)

  .then(function(resp) {
    const newEmployee = new Employee(resp.name, resp.ID, resp.title);
    newEmployee.getName();
  })