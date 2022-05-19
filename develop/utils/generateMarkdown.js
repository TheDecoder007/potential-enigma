// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//title, description, language, instructions, installation,
// credits,  license, testing, questions
function generateMarkdown(data) {
  return `# ${data.Title}


  # Description
  ${data.Description}

  ## Table of Contents

  * [Languages](##Languages)
  * [Usage](##Usage)
  * [Installation](##Installation)
  * [Credits](##Credits)
  * [Testing](##Testing)
  * [Questions](##Questions)
  * [License](##License)

  ## Languages Used
  * ${data.Languages[0]}
  * ${data.Languages[1]}
  * ${data.Languages[2]}
  * ${data.Languages[3]}
  * ${data.Languages[4]}
  * ${data.Languages[5]}
  * ${data.Languages[6]}

  ## Usage
  The following must be done to use this app: ${data.Usage}

  ## Installations Needed
  The following must be installed to run this app: ${data.Installation}

  ## Other Contributions
  ${data.Credits}

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
