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

let wordArr = [];

const addLetter = letter => {
  const newletter = new Letter(letter);
  wordArr.push(newletter);
};

addLetter('c');
addLetter('h');
addLetter('e');
addLetter('e');
addLetter('s');
addLetter('e');

const b = new Word(wordArr);

console.log(b.updateWord('e'));
console.log(b.getWord());
console.log(b.updateWord('c'));
console.log(b.getWord());

module.exports = Word;
