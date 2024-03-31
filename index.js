#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// 1) Computer will generate a number
// 2) User input for guessing number
// 3) Compare user input with computer genrated number & show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You Guess Right Number");
}
else {
    console.log("You Guess Wrong Number");
}
