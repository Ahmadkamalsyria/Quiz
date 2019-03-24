function Questions(text, options, answer) {
  this.text = text;
  this.options = options;
  this.answer = answer;
}
Questions.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
};
