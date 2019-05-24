function Quiz(questions, id) {
  this.questions = questions;
  this.score = 0;
  this.questionIndex = 0;
  this.quizId = id;
}
Quiz.prototype.currentQuestion = function() {
  return this.questions[this.questionIndex];
};
Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
};
Quiz.prototype.guess = function(choice) {
  if (this.currentQuestion().correctAnswer(choice)) {
    this.score++;
  }
  this.questionIndex++;
};
