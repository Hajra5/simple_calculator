#!/usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operation to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "substraction", "multiplication", "division"],
  },
]);

if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if(answer.operator === "substraction") {
    console.log(answer.firstNumber - answer.secondNumber);  
} else if(answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
     console.log("please enter valid operator")
}

