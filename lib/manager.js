const Employee = require('./employee.js');
// const ManagerTest = require('../test/manager.test');

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, title);
    this.officeNumber = officeNumber;
  }
  
  getRole() {

    // OVERRIDDEN TO RETURN 'MANAGER'
  }
}
