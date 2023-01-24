const inquirer = require("inquirer");
const fs = require("fs");

inquirer 
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name'
    },

  ])
  .then((data) => {
    let finalString = ``;

    fs.writeFile("index.html", finalString, (err) => {
      if (err)
        console.log(err);
    })
    // fs.writeFile("index.html", finalString, null)

    // fs.writeFile("index.html", finalString)
  })