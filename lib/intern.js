const Employee = require('./employee.js');

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

module.exports = Intern;