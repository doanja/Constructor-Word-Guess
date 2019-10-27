const Word = require('./Word');
const Letter = require('./Letter');
const Inquirer = require('inquirer');

const wordbank = [
  'feminist',
  'area',
  'lonely',
  'distant',
  'ballet',
  'cancer',
  'wander',
  'chimney',
  'gene',
  'coverage',
  'dress',
  'committee',
  'coup',
  'project',
  'shelter',
  'sound',
  'scrap',
  'liberal',
  'conventional',
  'host',
  'posture',
  'executrix',
  'size',
  'desk',
  'danger',
  'cabinet',
  'indulge',
  'wood',
  'threat',
  'mainstream'
];

const validLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const MAX_NUMBER_OF_GUESSES = 10;
let numberOfGuesses = MAX_NUMBER_OF_GUESSES;

/**
 * function that returns a random word and creates a Word
 * @param {array} arr array of words
 */
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

/**
 * function that handles the game logic and prompts the user for words
 * @param {object} word the Word object containing the target word to be guessed
 */
const promptGuesses = word => {
  // when no more guesses remaining (lose conditioin)
  if (numberOfGuesses <= 0) {
    console.log('YOU LOSE! NO GUESSES REMAINING');
    initializeGame();
  }

  // when word does not contains underscores (win condition)
  else if (!word.getWord().includes('_')) {
    console.log('CORRECT!');
    initializeGame();
  }

  // else prompt recursively prompt the user for input
  else {
    Inquirer.prompt([
      // Here we create a basic text prompt.
      {
        type: 'input',
        message: 'Guess a Letter!',
        name: 'letter'
      }
    ]).then(res => {
      console.log('\n');
      const guessedLetter = res.letter.toLowerCase(); // force letter to be lowercase

      // check for non-letter
      if (!validLetters.includes(guessedLetter)) {
        console.log('Enter a valid letter...');
      }
      // letter is incorrect
      else if (!word.getUnderlyingCharacters().includes(guessedLetter)) {
        console.log('INCORRECT!');
        console.log(--numberOfGuesses + ' remaining...');
        console.log('Current Word:', word.getWord());
      }
      // letter is correct
      else if (word.getUnderlyingCharacters().includes(guessedLetter)) {
        word.updateWord(guessedLetter);
        console.log('Current Word:', word.getWord());
      }
      promptGuesses(word);
    });
  }
};

/**
 * function to start the game
 */
const initializeGame = () => {
  // pick a word
  const currentWord = pickWord();

  // reset numberOfGuesses
  numberOfGuesses = MAX_NUMBER_OF_GUESSES;

  console.log('A new game has started...');

  // start prompting for guesses
  promptGuesses(currentWord);
};

initializeGame();
