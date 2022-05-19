// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generatorMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
//title, description, language, instructions, installation,
// credits,  license
const questions = [ 
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project? (Required)',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your project name!');
              return false
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of the project (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you build this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your Github Username!');
                return false
              }
            }
          },
        {
          type: 'input',
          name: 'instructions',
          message: 'Enter any usage instructions',
          default: 'No special instructions'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter any installation instructions',
            default: 'No installation necessary'
          },
        {
          type: 'input',
          name: 'credits',
          message: 'List any credits for your project',
          default: 'No other contributors'
        },
        {
            type: 'input',
            name: 'license',
            message: 'What license is used?',
            default: 'No license used'
          },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        console.log(fileName)
        console.log(data)
            if (err) {
                return console.log(err)
            } else {
                console.log('New file created!')
            }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('REAME.md', generatorMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
