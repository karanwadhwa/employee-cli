const mongoose = require('mongoose');

// Map global promise - to get rid of warning
mongoose.Promise = global.Promise;

// Connect to db
const db = mongoose.connect('mongodb://localhost:27017/employees', {
  useMongoClient: true
});

// Import Employee Model
const Employee = require('./models/employee');

// Add Employee
const addEmployee = (employee) => {
  Employee.create(employee)
    .then((employee) => {
      console.info('Employee added');
      db.close();
    });
}

// Find Employee
const findEmployee = (ename) => {
  // make case insensitive
  var search = new RegExp(ename, 'i');
  console.log(`search = ${search}`);
  Employee.find({$or: [{firstname: search}, {lastname: search}]})
    .then((employee) => {
      if(employee.length === 0) {
        console.info(`No Employees with Name: ${ename}`);
      }
      else if(employee.length === 1) {
        console.info(employee);
        console.info(`1 Match found.`);
      } else {
        console.info(employee);
        console.info(`${employee.length} Matches found.`);
      }

      db.close();
    });
}

// Export all functions

module.exports = {
  addEmployee,
  findEmployee
}