const commander = require('commander');
const { addEmployee, findEmployee } = require('./index.js');

// Define version and description
commander
  .version('1.0.0')
  .description('Employee Management System')

// Define add command
commander
  .command('add <firstname> <lastname> <phone> <email> <dept> <title>')
  .alias('a')
  .description('Add Employee')
  .action((firstname, lastname, phone, email, dept, title) => {
    addEmployee({firstname, lastname, phone, email, dept, title});
  });

// Define find command
commander
  .command('find <name>')
  .alias('f')
  .description('Find employee')
  .action((name) => findEmployee(name));

commander.parse(process.argv);