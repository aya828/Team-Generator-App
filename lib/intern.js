const Employee = require('./employee.js');
const InternTest = require('../test/intern.test');

class Intern extends Employee {
  constructor(school) {
    super(name, id, title);
    this.school = school;
  }

  getSchool() {

  }

  getRole() {

    //OVERRIDDEN TO RETURN 'INTERN'
  }
}

module.exports = Intern;