function populate() {
  if (quiz.isEnded()) {
    showScore();
  } else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.currentQuestion().text;
    var correctAnswer = quiz.currentQuestion().answer;
    var options = quiz.currentQuestion().options;
    for (var i = 0; i < options.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = options[i];
      guess("btn" + i, options[i], correctAnswer);
    }
    showProgress();
  }
}

function guess(id, guess, correctAnswer) {
  var btn = document.getElementById(id);
  console.log(id);
  btn.onclick = function() {
    if (guess === correctAnswer) {
      $("#" + id).addClass("correct");
      console.log("correct");
      setTimeout(function() {
        quiz.guess(guess);
        $("#" + id).removeClass("correct");
        populate();
      }, 3000);
    } else {
      $("#" + id).addClass("false");
      console.log("wrong");
      setTimeout(function() {
        quiz.guess(guess);
        $("#" + id).removeClass("false");
        populate();
      }, 3000);
    }
  };
}

function showProgress() {
  var currentQuestion = quiz.questionIndex + 1;

  var progress =
    "<h3>question " +
    currentQuestion +
    " out of " +
    quiz.questions.length +
    "  </h3>";
  var element = document.getElementById("progress");
  element.innerHTML = progress;
}

function showResult() {
  var gameEndedHtml = "<h1 id='gameover'> You have completed SDG quiz</h1>";
  gameEndedHtml +=
    "<h3 id='score'> you have answered " +
    quiz.score +
    " out of " +
    quiz.questions.length +
    " questions" +
    " </h3>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameEndedHtml;
}

function showScore() {
  var gameEndedHtml = "<h1 id='gameover'> You have completed SDG quiz</h1>";
  gameEndedHtml +=
    "<h3 id='score'> you have answered " +
    quiz.score +
    " out of " +
    quiz.questions.length +
    " questions" +
    " </h3>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameEndedHtml;
}

let id = 2;
var questions = [];
switch (id) {
  case 1:
    questions = [
      new Questions(
        " ........ of the global population still lacks access to modern electricity",
        ["9%", "13%"],
        "13%"
      ),
      new Questions(
        " ........ people rely on wood, coal, charcoal or animal waste for cooking and heating",
        ["1 billion", "3 billion"],
        "3 billion"
      ),
      new Questions(
        "	Energy is the dominant contributor to climate change, accounting for around ........ of total global greenhouse gas emissions.",
        ["60%", "40%"],
        "60%"
      ),

      new Questions(
        "In 2015 ........ is the share of renewable energy in final energy consumption",
        ["57%", "17,5%"],
        "17,5%"
      ),
      new Questions(
        "At least ........ million people in the developing world have a solar home system",
        ["90", "30"],
        "30"
      ),
      new Questions(
        "How many people live in Africa with no access to electricity ?",
        ["600 million", "18 million"],
        "600 million"
      ),
      new Questions(
        "By 2030 global demand for energy is expected to rise ",
        ["30-35%", "15-20%"],
        "30-35%"
      ),
      new Questions(
        "In 2015, renewable energy share of the total primary energy consumption in Denmark accounts for .........",
        ["28.5%", "10%"],
        "28.5%"
      ),
      new Questions(
        "Research predicts that on average the cost of electricity generation will rise by ......... by 2050",
        ["60%", "50%"],
        "50%"
      ),
      new Questions(
        "Global electricity consumption per person has more ......... than 1970s",
        ["2X", "4X"],
        "2X"
      )
    ];
    break;

  case 2:
    questions = [
      new Questions(
        " ........ test test of the global population still lacks access to modern electricity",
        ["9%", "13%"],
        "13%"
      ),
      new Questions(
        " ........ test test people rely on wood, coal, charcoal or animal waste for cooking and heating",
        ["1 billion", "3 billion"],
        "3 billion"
      ),
      new Questions(
        "test test	Energy is the dominant contributor to climate change, accounting for around ........ of total global greenhouse gas emissions.",
        ["60%", "40%"],
        "60%"
      ),

      new Questions(
        "test test In 2015 ........ is the share of renewable energy in final energy consumption",
        ["57%", "17,5%"],
        "17,5%"
      ),
      new Questions(
        "At least ........ million people in the developing world have a solar home system",
        ["90", "30"],
        "30"
      ),
      new Questions(
        "How many people live in Africa with no access to electricity ?",
        ["600 million", "18 million"],
        "600 million"
      ),
      new Questions(
        "By 2030 global demand for energy is expected to rise ",
        ["30-35%", "15-20%"],
        "30-35%"
      ),
      new Questions(
        "In 2015, renewable energy share of the total primary energy consumption in Denmark accounts for .........",
        ["28.5%", "10%"],
        "28.5%"
      ),
      new Questions(
        "Research predicts that on average the cost of electricity generation will rise by ......... by 2050",
        ["60%", "50%"],
        "50%"
      ),
      new Questions(
        "Global electricity consumption per person has more ......... than 1970s",
        ["2X", "4X"],
        "2X"
      )
    ];
}

var quiz = new Quiz(questions, id);
populate();
