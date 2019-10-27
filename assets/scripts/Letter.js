function Letter(underlyingCharacter, hasGuessed = false) {
  this.underlyingCharacter = underlyingCharacter;

  this.hasGuessed = hasGuessed;

  // return blanks or the letter
  this.getLetter = function() {
    return this.hasGuessed ? this.underlyingCharacter : '_';
  };

  // set the letter to hasGuessed to true
  this.checkLetter = function(character) {
    if (this.underlyingCharacter === character) {
      this.hasGuessed = true;
    }
  };
}

module.exports = Letter;
