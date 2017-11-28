const mongoose = require('mongoose');


// Map global promise - to get rid of warning
mongoose.Promise = global.Promise;

// Connect to db
const db = mongoose.connect('mongodb://localhost:27017/employees', {
  useMongoClient: true
});

// Import Models
const Employee = require('./models/employee');