// const EmployeeTest = require('../test/employee.test');

class Employee {
  constructor (name, id, title) {
    this.name = name;
    this.id = id;
    this.title = title;
  }

  getName() {
    let name = this.name;

    fs.appendFile("../output/team.txt", name, err => {
      if (err) throw err;

      console.log(name);
    });
  }

  getId() {

  }

  getEmail() {

  }

  getRole() {

    // RETURNS 'EMPLOYEE'
  }
}

const newEmployee = new Employee(this.name, this.ID, this.title);

module.exports = Employee;