// TODO: Include packages needed for this application
// Imported required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'title',
        message: "What is your project title?",
      },
      {
        type: 'input',
        name: 'desc',
        message: 'Write a summary of your project',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['.MIT','GPL', 'BSD'],
      },
      {
        type: 'input',
        name: 'install',
        message: 'What are the dependancy instructions?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
      },
      {
        type: 'input',
        name: 'rinfo',
        message: 'Type the repo information.',
      },
      {
        type: 'input',
        name: 'cont',
        message: 'What are the contribution rules?',
      },
];

// TODO: Create a function to write README file
function writeToREADME(data) {
  const file = fs.createWriteStream('README.md')
  console.log(data)
file.write(data);
file.on('error', (err) => {
    throw err
  });  
  file.end();
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToREADME(generateMarkdown({ ...response}));
  });

}

// Function call to initialize app
init();
