const Word = require('./Word');
const Letter = require('./Letter');
const Inquirer = require('inquirer');

const wordbank = ['cheese'];
const validLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
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
    const guessedLetter = res.letter.toLowerCase(); // force letter to be lowercase

    // check for non-letter
    if (!validLetters.includes(guessedLetter)) {
      console.log('Enter a valid letter...');
    }
    // letter is incorrect
    else if (!word.getUnderlyingCharacters().includes(guessedLetter)) {
      numberOfGuesses--;
      console.log('INCORRECT!');
      console.log(numberOfGuesses + ' remaining...');
      console.log('Current Word:', word.getWord());
    }
    // letter is correct
    else {
      word.updateWord(guessedLetter);
      console.log('Current Word:', word.getWord());
    }
  });
};

const initializeGame = () => {
  // pick a word
  const currentWord = pickWord();

  // while there are still blanks... prompt user for letters
  // while (currentWord.getWord().includes('_') && numberOfGuesses > 0) {
  //   promptGuesses(currentWord);
  // }

  promptGuesses(currentWord);
};

initializeGame();
