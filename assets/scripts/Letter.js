function Letter(underlyingCharacter, hasGuessed = false) {
  this.underlyingCharacter = underlyingCharacter;
  this.hasGuessed = hasGuessed;
  this.getLetter = function() {
    return this.hasGuessed ? this.underlyingCharacter : '_';
  };

  this.checkLetter = function(character) {
    this.underlyingCharacter === character ? (this.hasGuessed = true) : (this.hasGuessed = false);
  };
}

// const a = new Letter('a', false);
// console.log(a.getLetter());
// console.log(a.checkLetter('b'));
// console.log(a.getLetter());

module.exports = Letter;
