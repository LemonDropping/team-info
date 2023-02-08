const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');


class CLI {
  constructor() {
    this.title = '';

    this.info = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter your name please',
        },
      ])
      .then(({ name }) => {
        this.title = `${name}'s info`;
        return this.addInfo();
      })
      .then(() => console.log('Created info.html'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

  addInfo() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'What is your email?',
        },
        {
          type: 'input',
          name: 'text',
          message: 'What is your github username?',
        },
        {
         type: 'input',
         name: 'text',
         message:'What is your managers name, employee ID, email address, and office number',
       },
      ])
      .then(({ text, priority, confirmAddTask }) => {
        this.info.push({ text, priority });
        if (confirmAddTask) {
          return this.addTask();
        }
      });
  }
}

module.exports = CLI;
