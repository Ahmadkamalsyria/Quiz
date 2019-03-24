function populate() {
  if (quiz.isEnded()) {
    showScore();
  } else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.currentQuestion().text;
    console.log("hello");

    var options = quiz.currentQuestion().options;
    for (var i = 0; i < options.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = options[i];
      guess("btn" + i, options[i]);
    }
    showProgress();
  }
}

function guess(id, guess) {
  var btn = document.getElementById(id);
  btn.onclick = function() {
    quiz.guess(guess);
    populate();
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

var questions = [
  new Questions(
    " ........ of the global population still lacks access to modern electricity",
    ["9%", "13%", "21%", "none of them"],
    "13%"
  ),
  new Questions(
    " ........ people rely on wood, coal, charcoal or animal waste for cooking and heating",
    ["1 billion", "5 billion", "3 billion", "none of them"],
    "3 billion"
  ),
  new Questions(
    "	Energy is the dominant contributor to climate change, accounting for around ........ of total global greenhouse gas emissions.",
    ["60%", "40%", "100%", "5%"],
    "60%"
  ),

  new Questions(
    "In 2015 ........ is the share of renewable energy in final energy consumption",
    ["57%", "17,5%", "39%", "0.7%"],
    "17,5%"
  ),
  new Questions(
    "At least ........ million people in the developing world have a solar home system",
    ["90", "30", "13", "5"],
    "30"
  ),
  new Questions(
    "How many people live in Africa with no access to electricity ?",
    ["1 billion", "200 million", "600 million", "18 million"],
    "600 million"
  ),
  new Questions(
    "By 2030 global demand for energy is expected to rise ",
    ["30-35%", "15-20%", "5-10%", "0%"],
    "30-35%"
  ),
  new Questions(
    "In 2015, renewable energy share of the total primary energy consumption in Denmark accounts for .........",
    ["28.5%", "10%", "20%", "33%"],
    "28.5%"
  ),
  new Questions(
    "Research predicts that on average the cost of electricity generation will rise by ......... by 2050",
    ["60%", "50%", "25%", "34%"],
    "50%"
  ),
  new Questions(
    "Global electricity consumption per person has more ......... than 1970s",
    ["2X", "4X", "6X", "8X"],
    "2X"
  )
];

var quiz = new Quiz(questions);
populate();
