const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

// Starting prompts to create manager role
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Must be Manager)",
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
    },
    {
      type: "input",
      name: "officeNum",
      message: "What is your office number?",
    },
  ]).then(function(response) {
    // Creates new manager object
    const newMan = new Manager(response.name, response.ID, response.email, response.officeNum);

    // Calling function from manager.js to append responses to text file
    newMan.writeToTextFile();

    // Looping to creating new team member function once text for manager is appended
    newTeamMember();
  })

// Prompts new role to be created, then goes to appropriate function for specific role. Once finished, 'finished' will appear in console log and loop will stop 
function newTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "title",
        message: "What is your role?",
        choices: ['Engineer', 'Intern', 'Finished']
      }
    ]).then (function(resp) {
      switch (resp.title) {
        case 'Engineer':
          newEngineer();
          break;
        case 'Intern':
          newIntern();
          break;
        case 'Finish':
          console.log("Finished");
          break;
      }
    });
  }

  // Prompts for Engineer role, once 'Engineer' is chosen as new team member to be created
  function newEngineer() {
    inquirer
    .prompt([
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
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is your gitHub username?",
      }
    ]).then(function(resp) {
      // Creating new Engineer obj
      const newEngineer = new Engineer(resp.name, resp.ID, "Engineer", resp.email, resp.gitHub);

      // Calling function from engineer.js to append responses to text file
      newEngineer.appendToTextFile();

      // Looping to creating new team member function once text for engineer is appended
      newTeamMember();
    })
   
  }

  // Prompts for Intern role, once 'Intern' is chosen as new team member to be created
  function newIntern() {
    inquirer
    .prompt([
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
      },
      {
        type: "input",
        name: "school",
        message: "What school do you attend?",
      }
    ]).then(function(resp) {

      // Creating new Intern obj
      const newIntern = new Intern(resp.name, resp.ID, "Intern", resp.email, resp.school);

      // Calling function from intern.js to append responses to text file
      newIntern.appendToTextFile();

      // Looping to creating new team member function once text for intern is appended
      newTeamMember();
    })  
  }
