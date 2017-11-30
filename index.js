const mongoose = require('mongoose');
const Table = require('cli-table');
var colors = require('colors');

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
      console.info('Employee added'.green);
      db.close();
    });
}

// Find Employee
const findEmployee = (ename) => {
  // make case insensitive
  var search = new RegExp(ename, 'i');
  Employee.find({$or: [{firstname: search}, {lastname: search}]})
    .then((employees) => {
      if(employees.length === 0) {
        console.info(`No Employees with Name: ${ename}`.red);
      } else {
        console.log('Resize console window if table is disfigured.'.inverse);
        var table = new Table({
          head: ['Name', 'Phone', 'Email', 'Department', 'Title', 'ID']
        , colWidths: [23, 15, 30, 20, 25, 27]
        });
        for(var i=0; i<employees.length; i++) {
          var id = employees[i]._id
          var name = (`${employees[i].firstname} ${employees[i].lastname}`);
          var phone = employees[i].phone;
          var email = employees[i].email;
          var dept = employees[i].dept;
          var title = employees[i].title;
          table.push(
            [name, phone, email, dept, title, id]
          );
        }
        console.log(table.toString());
        if(employees.length === 1) {

        console.log('1 Match found.'.green);
        } else {
        console.log(`${employees.length} Matches found.`.green);
        }
      }
      db.close();
    });
}

// Update Employee
const updateEmployee = (_id, employee) => {
  Employee.update({_id}, employee)
    .then((employee) => {
      console.info(`Employee Record Updated.`.blue);
      db.close();
    });
}

// Remove Employee
const removeEmployee = (_id) => {
  Employee.remove({_id})
    .then((employee) => {
      console.info(`Employee Record Deleted.`.red);
      db.close();
    });
}

// List Employee
const listEmployees = () => {
  Employee.find()
    .then((employees) => {
      console.log('Resize console window if table is disfigured.'.inverse);
      var table = new Table({
        head: ['Name', 'Phone', 'Email', 'Department', 'Title', 'ID']
      , colWidths: [23, 15, 30, 20, 25, 27]
      });
      for(var i=0; i<employees.length; i++) {
        var id = employees[i]._id
        var name = (`${employees[i].firstname} ${employees[i].lastname}`);
        var phone = employees[i].phone;
        var email = employees[i].email;
        var dept = employees[i].dept;
        var title = employees[i].title;
        table.push(
          [name, phone, email, dept, title, id]
        );
      }
      console.log(table.toString());
      console.info(`${employees.length} Employees Listed.`.green);
      db.close();
    });
}


// Export all functions

module.exports = {
  addEmployee,
  findEmployee,
  updateEmployee,
  removeEmployee,
  listEmployees
}