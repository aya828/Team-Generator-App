const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

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
    const newMan = new Manager(response.name, response.ID, "Manager");
    newMan.writeToTextFile();
  })
//* Ask for manager info
//  * Build manager object
//  * Use manager object to write to log file
//  * Go to build team
 
//  

function newTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "title",
        message: "What is your role?",
        choices: ['Engineer', 'Intern', 'Finish']
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
          console.log("Finish");
          break;
      }
    });
  }

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
      const newEngineer = new Engineer(resp.name, resp.ID, "Engineer", resp.gitHub);
      newIntern.appendToTextFile();
    })
  }

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
      const newIntern = new Intern(resp.name, resp.ID, "Intern", resp.school);
      console.log(newIntern);
      newIntern.appendToTextFile();
    })
  }





// //  * Build team:
// //  *    - Ask what type of team member, or finish
// //  *    - Use switch statement to go to next step
// //  * 
// //  * For Interns:
// //  *   - Ask for their info: name, email, school
// //  *   - Make intern object
// //  *   - Append text file
// //  *   - Go back to build team
// //  * 
// //  * For Engineers:
// //  *   - Ask for their info: name, email, github
// //  *   - Make engineer object
// //  *   - Append text file
// //  *   - Go back to build team
// //  */

// // function buildManager(){
// //   // inquirer questions
// //   // Build manger object

// //   // QWrite log file
// //   // Go to Choose Team Member Type
// // }

// // function chooseTeamMemberType(){
// //   // inquirer question
// //   // switch statement sends user to the next fuction
// // }

// // function buildEngineer(){


// //   // send back to chooseTeamMemberType
// // }

// // function buildIntern(){


// //   // send back to chooseTeamMemberType()
// // }





// const questions = [
//     {
//       type: "list",
//       name: "title",
//       message: "What is your role?",
//       choices: ['Engineer', 'Intern', 'Finish']
//     },
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?",
//     },
//     {
//       type: "input",
//       name: "ID",
//       message: "What is your ID?",
//     },
//     {
//       type: "input",
//       name: "email",
//       message: "What is your email?",
//     }
//   ]

//   inquirer.prompt(questions)

//   .then(function(resp) {
//     const newEmployee = new Employee(resp.name, resp.ID, resp.title);
//     newEmployee.getName();