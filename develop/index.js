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
          name: 'Title',
          message: 'What is the name of your project? (Required)',
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
          name: 'Description',
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
          name: 'Languages',
          message: 'What did you build this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
        //   default: falseChoice => {
        //       if (falseChoice) {
        //           return " "
        //       }
        //   }
        },
        {
            type: 'input',
            name: 'Github',
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
          name: 'Usage',
          message: 'Enter any usage instructions',
          default: 'No special instructions'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Enter any installation instructions',
            default: 'No installations necessary'
          },
        {
          type: 'input',
          name: 'Credits',
          message: 'List any credits for your project',
          default: 'No other contributors'
        },
        {
            type: 'input',
            name: 'Testing',
            message: 'What is needed to test this app?',
            default: 'No testing available'
          },
          {
            type: 'link',
            name: 'Questions',
            message: 'What is your email address?',
            default: 'No contact information available'
          },
        {
            type: 'list',
            name: 'License',
            message: 'What license is used?',
            choices: ['MIT', 'Apache', 'GPL'],
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
