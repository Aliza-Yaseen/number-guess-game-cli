#! /usr/bin/env node
 
 import inquirer from "inquirer";

// 1) Computer will generate a number

// 2) User input for guessing number

// 3) Compare user input with computer genrated number & show result

const randomNumber = Math.floor(Math.random() * 10 + 1);


 const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10",
    },
 ]);

 if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulation! You Guess Right Number")
 }
 else{
    console.log("You Guess Wrong Number");
 }