// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseB(license) {
  if (license !== 'None') {
    return `(https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseL(license) {
  if (license !== 'None') {
    return `(#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function liscenseS(license) {if (license !== 'None') {
  return `This project license is  ${license}.`;
}
return "";}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents 

  * [Installation](#installation)

  * [Usage](#usage)

  ${licenseL(data.license)}(#license)

  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install dependencies, run:
  
  ${data.install}

  ## Usage
  
  ${data.rinfo}
  
  ${liscenseS(data.license)}

  ${licenseB(license)}
    
  ## Contributing
  
  ${data.cont}
  
  ## Tests
  
  To run tests, run:
  
  ${data.test}
  
  ## Questions
  
Contact me at: ${data.email}. 
Link to my github: (https://github.com/${data.github}/)
  
`;
}

module.exports = generateMarkdown;
