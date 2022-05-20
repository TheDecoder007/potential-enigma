// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



function renderLicenseBadge(License) {
  
  // if (License(choices) === 'Apache') {
  //  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

  // }
  //var License = `${data.License}`;
  // if (`${data.License[1]}`) {
  //   '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  // }
 
 
  // if (License === [1]) {
  //    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  // }
  // else {
  //   return 'no data'
  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {}

// TODO: Create a function to generate markdown for README
//title, description, language, instructions, installation,
// credits,  license, testing, questions
function generateMarkdown(data) {

  // renderLicenseBadge();
  return `# ${data.Title}
  

  # Description
  ${data.Description}

  ## Table of Contents

  * [Languages](#Languages)
  * [Usage](#Usage)
  * [Installation](#Installation)
  * [Contribution](#Contributions)
  * [Testing](#Testing)
  * [Questions](#Questions)
  * [License](#License)

  ## Languages Used
  * ${data.Languages}


  ## Usage
  The following must be done to use this app: ${data.Usage}

  ## Installation
  The following must be installed to run this app: ${data.Installation}

  ## Contributions
  ${data.Credits}

  ## Testing
  The following is needed to run testing: ${data.Testing}

  ## Questions
  * Contact me here: ${data.Questions}
  * GitHub Profile: https://github.com/${data.Github}
  * Project Repository: https://github.com/${data.Github}/${data.Title}

  ## License
  This project is licensed with ${data.License}
  
  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

`;
}

module.exports = generateMarkdown;
