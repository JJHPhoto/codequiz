// My data
let time = 5;
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

  // {
  //   title: 'Why is Logan so smart?',
  //   answer1: 'Lenova',
  //   answer2: 'Mac',
  //   answer3: 'Chromebook',
  //   answer4: 'Dell',
  //   correctAnswer: 1
  // },

  // {
  //   title: 'Why does Nikon suck?',
  //   answer1: 'Lenova',
  //   answer2: 'Mac',
  //   answer3: 'Chromebook',
  //   answer4: 'Dell',
  //   correctAnswer: 3
  // },

  // {
  //   title: 'Did George Lucas steal the plot of Star Wars from Dune?',
  //   answer1: 'Lenova',
  //   answer2: 'Mac',
  //   answer3: 'Chromebook',
  //   answer4: 'Dell',
  //   correctAnswer: 4
  // },

  // {
  //   title: 'Is Google really evil?',
  //   answer1: 'Lenova',
  //   answer2: 'Mac',
  //   answer3: 'Chromebook',
  //   answer4: 'Dell',
  //   correctAnswer: 2
  // },

  // {
  //   title: 'Why do we take selfies?',
  //   answer1: 'Lenova',
  //   answer2: 'Mac',
  //   answer3: 'Chromebook',
  //   answer4: 'Dell',
  //   correctAnswer: 1
  // },

  // {
  //   title: 'Is Apple a cult?',
  //   answer1: 'Lenova',
  //   answer2: 'Mac',
  //   answer3: 'Chromebook',
  //   answer4: 'Dell',
  //   correctAnswer: 3
  // },

  // {
  //   title: 'Is Mark Z a human?',
  //   answer1: 'Lenova',
  //   answer2: 'Mac',
  //   answer3: 'Chromebook',
  //   answer4: 'Dell',
  //   correctAnswer: 2
  // },

  // {
  //   title: 'How much more money does Jeff B need?',
  //   answer1: 'Lenova',
  //   answer2: 'Mac',
  //   answer3: 'Chromebook',
  //   answer4: 'Dell',
  //   correctAnswer: 4
  // },

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
function submitScore() {
  document.getElementById("HighScores").style.display = "block";
  document.getElementById("QuizOver").style.display = "none";

  const initials = document.getElementById("initials").value;

  localStorage.setItem("entries", initials.value);

  let entries = JSON.parse(localStorage.getItem("entries"));

  entries.push(JSON.stringify({ initials: initials, score: score }));

  localStorage.setItem(entries);
}

function clearScores() {
  //Need to be able to clear localStorage of all "entries" in screen. Don't want to reload.
}

function showScores() {
  document.getElementById("HighScores").style.display = "block";
  document.getElementById("QuizRules").style.display = "none";
  //for my starting screen that lets me see my high scores. If there are none stored in localStorage, it should be blank.
  //Blank part working.
}

// Todo

// Score
// =====
// load previous scores from local storage
// submitScore :
// let entries = JSON.parse(localStorage.getItem('entries'))
// entries.push(JSON.stringify({initials: initials, score: score}))
// localStorage.setItem(entries)

// save score + initials
// reset quiz
// clear scores
