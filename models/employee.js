const mongoose = require('moongoose');

const employeeSchema = mongoose.Schema({
  firstname:  {type: String},
  lastname:   {type: String},
  phone:      {type: String},
  email:      {type: String},
  dept:       {type: String},
  postion:    {type: String}
});

// Define Employee model
const Employee = mongoose.model('employees', employeeSchema);
// employees->collection name

// Export Employee model
module.exports = Employee;
