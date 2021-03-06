const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Projects Name?',
    },
    {
      type: 'input',
      name: 'gendesc1',
      message: 'What is the problem your project is trying to solve / or why does your project exist',
    },
    {
        type: 'input',
        name: 'gendesc2',
        message: 'How will Your porject solve this problem / leave blank if N/A',
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'will your project need a table of contents',
    },
    {
        type: 'input',
        name: 'install',
        message: 'what are the steps to install your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'how do you use your project',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Enter your credits',
    },
    {
      type: 'list',
      message: 'Enter your license',
      name: 'license',
      choices: ['email', 'phone', 'telekinesis'],
    }
  ]);


const generatereadme = (answers) =>
`
# ${answers.name}

## Description
${answers.gendesc1}

${answers.gendesc2}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${answers.install}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${answers.license}

`;





const init = () => {
  promptUser().then((answers) => {
    try {
      const html = generatereadme(answers);
      fs.writeFileSync('README.md', html);
      console.log('Successfully wrote to README.md');
    } catch (error) {
      console.log(error);
    }
  });
};

init();

