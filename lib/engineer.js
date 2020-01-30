const Employee = require('./employee.js');

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