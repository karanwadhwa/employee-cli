const mongoose = require('moongoose');

const employeeSchema = mongoose.Schema({
  firstname: String,
  lastname:  String,
  phone:     String,
  email:     String,
  dept:      String,
  postion:   String
});

// Define Employee model
const Employee = mongoose.model('employees', employeeSchema);
// employees->collection name

// Export Employee model
module.exports = Employee;
