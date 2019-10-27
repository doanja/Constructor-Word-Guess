const Word = require('./Word');
const Letter = require('./Letter');
const Inquirer = require('inquirer');

const wordbank = ['cheese'];
let numberOfGuesses = 10;

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

const promptGuesses = word => {
  Inquirer.prompt([
    // Here we create a basic text prompt.
    {
      type: 'input',
      message: 'Guess a Letter!',
      name: 'letter'
    }
  ]).then(res => {
    word.updateWord(res.letter);
    console.log(word.getWord());
    // console.log('letter:', res.letter);
  });
};

const initializeGame = () => {
  // pick a word
  const currentWord = pickWord();
  // console.log('currentWord:', pickWord());

  // console.log(currentWord.getWord().includes('_'));

  // while there are still blanks... prompt user for letters
  while (currentWord.getWord().includes('_') && numberOfGuesses > 0) {
    promptGuesses(currentWord);
  }
};

initializeGame();
