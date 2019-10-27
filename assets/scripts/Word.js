const Letter = require('./Letter');

function Word(letterArr) {
  this.letterArr = letterArr;

  this.getWord = function() {
    let result = '';
    this.letterArr.forEach(letter => {
      result += letter.getLetter() + ' ';
    });
    return result;
  };

  this.updateWord = function(character) {
    this.letterArr.forEach(letter => {
      letter.checkLetter(character);
    });
  };
}

// let wordArr = [];

// const addLetter = letter => {
//   const newletter = new Letter(letter);
//   wordArr.push(newletter);
// };

// addLetter('c');
// addLetter('h');
// addLetter('e');
// addLetter('e');
// addLetter('s');
// addLetter('e');

// const currentWord = new Word(wordArr);

// console.log(currentWord.updateWord('c'));
// console.log(currentWord.getWord());
// console.log('currentWord :', currentWord);
// console.log('----------------------------------------------------');
// console.log(currentWord.updateWord('h'));
// console.log(currentWord.getWord());
// console.log('currentWord :', currentWord);

module.exports = Word;
