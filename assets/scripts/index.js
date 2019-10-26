const Word = require('./Word');
const Letter = require('./Letter');
const Inquirer = require('inquirer');

const wordbank = ['cheese', 'crackers', 'hotdogs', 'chips'];

const pickWord = (arr = wordbank) => {
  let lettersArr = []; // array to store Letters
  // get a random word
  const randomWord = arr[Math.floor(Math.random() * arr.length)];

  // split the random words into letters
  const randomLetters = randomWord.split('');

  // call the letter instructor for each letter and add it to an arr
  randomLetters.map(eachLetter => {
    const singleLetter = new Letter(eachLetter);
    lettersArr.push(singleLetter);
  });

  // call word constructor passing in the letters arr
  const word = new Word(lettersArr);

  // return letter
  return word;
};

const promptGuesses = () => {
  Inquirer.prompt([
    // Here we create a basic text prompt.
    {
      type: 'input',
      message: 'Guess a Letter!',
      name: 'letter'
    }
  ]).then(inquirerResponse => {});
};

const initializeGame = () => {
  // pick a word
  const currentWord = pickWord();
  while()
};
