// My data
let time = 50;
let score = 0;
let currentQuestion = 0;
let intervalId;

// My questions in an object array.
const data = [
  {
    title: "What computer did Steve Jobs make?",
    answer1: "Lenova",
    answer2: "Mac",
    answer3: "Chromebook",
    answer4: "Dell",
    correctAnswer: 2,
  },

  {
    title: "Is Apple a cult?",
    answer1: "Only ",
    answer2: "Deal with the devil",
    answer3: "Chromebook",
    answer4: "All of the above",
    correctAnswer: 1,
  },

  {
    title: "Why does Nikon suck?",
    answer1: "Lenova",
    answer2: "Mac",
    answer3: "Chromebook",
    answer4: "Dell",
    correctAnswer: 3,
  },

  {
    title: "What books did George Lucas steal the plot of Star Wars from?",
    answer1: "Lenova",
    answer2: "Mac",
    answer3: "Chromebook",
    answer4: "Dell",
    correctAnswer: 4,
  },

  {
    title: "Is Google really evil?",
    answer1: "Lenova",
    answer2: "Mac",
    answer3: "Chromebook",
    answer4: "Dell",
    correctAnswer: 2,
  },

  {
    title: "Why do we take selfies?",
    answer1: "Lenova",
    answer2: "Mac",
    answer3: "Chromebook",
    answer4: "Dell",
    correctAnswer: 1,
  },

  {
    title: "Is Apple a cult?",
    answer1: "Lenova",
    answer2: "Mac",
    answer3: "Chromebook",
    answer4: "Dell",
    correctAnswer: 3,
  },

  {
    title: "Is Mark Z a human?",
    answer1: "Lenova",
    answer2: "Mac",
    answer3: "Chromebook",
    answer4: "Dell",
    correctAnswer: 2,
  },

  {
    title: "How much more money does Jeff B need?",
    answer1: "Lenova",
    answer2: "Mac",
    answer3: "Chromebook",
    answer4: "Dell",
    correctAnswer: 4,
  },

  {
    title: "Are we in the Matrix?",
    answer1: "Yes",
    answer2: "No",
    answer3: "Maybe",
    answer4: "Ask the gods",
    correctAnswer: 3,
  },
];

// My function that writes my questions for me in my "QuestionBox" div.
function writeQuestion() {
  document.getElementById("question-title").innerHTML =
    data[currentQuestion].title;
  document.getElementById("answer1").innerHTML = data[currentQuestion].answer1;
  document.getElementById("answer2").innerHTML = data[currentQuestion].answer2;
  document.getElementById("answer3").innerHTML = data[currentQuestion].answer3;
  document.getElementById("answer4").innerHTML = data[currentQuestion].answer4;
}

writeQuestion();

//My timer.
document.getElementById("Timer").innerHTML = time;

// My function that starts my quiz questions and my the timer's countdown.
function startQuiz() {
  document.getElementById("QuestionBox").style.display = "block";
  document.getElementById("QuizRules").style.display = "none";
  intervalId = setInterval(function () {
    time -= 1;
    document.getElementById("Timer").innerHTML = time;
    if (time === 0) {
      endQuiz();
    }
  }, 1000);
}

// My function that checks if the answer is correct. If correct, 10 points get added to the score. If incorrect, the user loses 10 seconds.
function submitAnswer(answer) {
  if (answer === data[currentQuestion].correctAnswer) {
    score += 10;
  } else {
    time -= 10;
  }
  console.log(score);
  nextQuestion();
}

//My function that gets called after an answer is submitted.
function nextQuestion() {
  currentQuestion += 1;
  if (currentQuestion === data.length) {
    endQuiz();
  } else {
    writeQuestion();
  }
}

//My function that ends the game and brings up the input for the user's initials to be submitted.
function endQuiz() {
  document.getElementById("finalScore").innerHTML = score;
  document.getElementById("QuizOver").style.display = "block";
  document.getElementById("QuestionBox").style.display = "none";
  clearInterval(intervalId);
}

//My function that will save my scores to local storage to then be shown on my High Scores screen.
function collectScore() {
  //Change screen to "HighScores" screen
  document.getElementById("HighScores").style.display = "block";
  document.getElementById("QuizOver").style.display = "none";

  //Converts the initials a user inputs into a const.
  const userInput = document.getElementById("initials").value;
  // console.log(userInput);

  //Combining my initials input and score.
  let entry = { userInput: userInput, score: score };
  // console.log(entry);

  //Saving to localStorage.
  localStorage.setItem("entry", JSON.stringify(entry));
}

// My function that loads the user's scores from local storage.
function loadScore() {
  //Get the data out of localStorage.
  let storedScore = localStorage.getItem("entry");
  let savedScore = JSON.parse(storedScore);
  let getScore = savedScore.userInput + ": " + savedScore.score;
  document.getElementById("userScores").innerHTML = getScore;
  // console.log(getScore);
}

// Takes the user to the High Scores screen.
// If its a first time user, it should be blank. If the user has already scored, there should be an ranked scoreboard.
function showScores() {
  document.getElementById("HighScores").style.display = "block";
  document.getElementById("QuizRules").style.display = "none";
  loadScore();
}

//My function that submits my scores to my HighScore screen.
function submitScore() {
  collectScore();
  loadScore();
}

//My function that removes HighScores from screen.
function clearScores() {
  document.getElementById("userScores").innerHTML = "";
  localStorage.clear();
}

// My function to restart quiz.
function restartQuiz() {
  location.reload();
}

document.getElementById("start").addEventListener("click", startQuiz);
