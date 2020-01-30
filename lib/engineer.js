const Employee = require('./employee.js');
const EngineerTest = require('../test/engineer.test');

class Engineer extends Employee {
  constructor(github) {
    super(name, id, title);
    // GITHUB USERNAME
    this.github = github;
  }

  getGithub() {

  }

  getRole() {

    // OVERRIDDEN TO RETURN 'ENGINEER'
  }
}

module.exports = Engineer;