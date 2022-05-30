// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// const License = `${License}`;

function renderLicenseBadge(License) {



if (`${answer.License}` === 'MIT') {
   `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}
else if (`${answer.License}` === 'Apache') {
   `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
}  
else if (`${answer.License}` === 'WTFPL') {
     `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
  }
else {
   " "
}
}
  //  if (`${License.choices[1]}`) {
  //    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  //  }


    // if (`${License.choices}` === 'Apache') {
    //   return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    // }
  
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


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {


  renderLicenseBadge();

   // renderLicenseBadge(data);

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
  ${data.Contribution}

  ## Testing
  The following is needed to run testing: ${data.Testing}

  ## Questions
  * Contact me here: ${data.Questions}
  * GitHub Profile: https://github.com/${data.Github}
  * Project Repository: https://github.com/${data.Github}/${data.Title}

  ## License
  This project is licensed with ${data.License}
  
  
  `;
}

module.exports = generateMarkdown;
<<<<<<< HEAD
// module.exports = renderLicenseBadge;
=======
module.exports = renderLicenseBadge;
>>>>>>> aeb13be7d4749fcc068deaf1c96ceb47efb052d4

// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
