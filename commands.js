const commander = require('commander');
const { prompt } = require('inquirer');
const { addEmployee, findEmployee } = require('./index.js');

// Questions Prompt for addEmployee
const questions = [
  {
    type: 'input',
    name: 'firstname',
    message: 'Firstname: '
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Lastname: '
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Phone: '
  },
  {
    type: 'input',
    name: 'email',
    message: 'Email: '
  },
  {
    type: 'input',
    name: 'dept',
    message: 'Department: '
  },
  {
    type: 'input',
    name: 'title',
    message: 'Title: '
  }
]

// Define version and description
commander
  .version('1.0.0')
  .description('Employee Management System')

// add command using commander.js
/* commander
  .command('add <firstname> <lastname> <phone> <email> <dept> <title>')
  .alias('a')
  .description('Add Employee')
  .action((firstname, lastname, phone, email, dept, title) => {
    addEmployee({firstname, lastname, phone, email, dept, title});
  });
 */

// Add command using questions prompt
commander
  .command('add')
  .alias('a')
  .description('Add Employee')
  .action(() => {
    prompt(questions)
      .then((answers) => addEmployee(answers));
  });

// Define find command
commander
  .command('find <name>')
  .alias('f')
  .description('Find employee')
  .action((name) => findEmployee(name));

commander.parse(process.argv);