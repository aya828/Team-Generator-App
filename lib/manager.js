const Employee = require('./employee.js');

class Manager extends Employee {
  constructor(officeNumber) {
    super();
    this.officeNumber = officeNumber;
  }
  
  getRole() {

    // OVERRIDDEN TO RETURN 'MANAGER'
  }
}