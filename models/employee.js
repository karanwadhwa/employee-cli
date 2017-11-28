const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  firstname: String,
  lastname:  String,
  phone:     String,
  email:     String,
  dept:      String,
  title:   String
});

// Define Employee model
const Employee = mongoose.model('employees', employeeSchema);
// employees->collection name

// Export Employee model
module.exports = Employee;
