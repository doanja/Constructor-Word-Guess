const Letter = require('./Letter');

function Word(letterArr) {
  this.letterArr = letterArr;

  // get the word with blanks or the actual letter
  this.getWord = function() {
    let result = '';
    this.letterArr.forEach(letter => {
      result += letter.getLetter() + ' ';
    });
    return result;
  };

  // update the letter if it has been guessed correctly
  this.updateWord = function(character) {
    this.letterArr.forEach(letter => {
      letter.checkLetter(character);
    });
  };

  // return the underlying character for each letter
  this.getUnderlyingCharacters = function() {
    let result = '';
    this.letterArr.forEach(letter => {
      result += letter.underlyingCharacter;
    });
    return result;
  };
}

module.exports = Word;
