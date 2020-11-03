// My variables

// My psuedocode notes

// Need to build an array of questions that I can cycle through. The will need a question, 4 options with buttons and a correct answer. They then need to show if you're correct. If you're wrong, I need to reduce 10 seconds off the timer. When the user clicks on an aswer, the button should go to an "active" state and then move the user to the next question.

// On the "QuizOver" screen, there needs to be an "active" state when entering initials and when you click the "submit" button.

let currentQuestion = 0

const data = [
  {
    title: 'What computer did Steve Jobs make?',
    answer1: 'Lenova',
    answer2: 'Mac',
    answer3: 'Chromebook',
    answer4: 'Dell',
    correctAnswer: 1

  },

  // {
  //   title: 'Why is Logan so smart?',
  // answer1: 'Lenova',
  // answer2: 'Mac',
  // answer3: 'Chromebook',
  // answer4: 'Dell',
  // correctAnswer: 1
  // },

  // {
  //   title: 'Why does Nikon suck?',
  // answer1: 'Lenova',
  // answer2: 'Mac',
  // answer3: 'Chromebook',
  // answer4: 'Dell',
  // correctAnswer: 1
  // },

  // {
  //   title: 'Did George Lucas steal the plot of Star Wars from Dune?',
  // answer1: 'Lenova',
  // answer2: 'Mac',
  // answer3: 'Chromebook',
  // answer4: 'Dell',
  // correctAnswer: 1
  // },

  // {
  //   title: 'Is Google really evil?',
  // answer1: 'Lenova',
  // answer2: 'Mac',
  // answer3: 'Chromebook',
  // answer4: 'Dell',
  // correctAnswer: 1
  // },

  // {
  //   title: 'Why do we take selfies?',
  // answer1: 'Lenova',
  // answer2: 'Mac',
  // answer3: 'Chromebook',
  // answer4: 'Dell',
  // correctAnswer: 1
  // },

  // {
  //   title: 'Is Apple a cult?',
  // answer1: 'Lenova',
  // answer2: 'Mac',
  // answer3: 'Chromebook',
  // answer4: 'Dell',
  // correctAnswer: 1
  // },

  // {
  //   title: 'Is Mark Z a human?',
  // answer1: 'Lenova',
  // answer2: 'Mac',
  // answer3: 'Chromebook',
  // answer4: 'Dell',
  // correctAnswer: 1
  // },

  // {
  //   title: 'How much more money does Jeff B need?',
  // answer1: 'Lenova',
  // answer2: 'Mac',
  // answer3: 'Chromebook',
  // answer4: 'Dell',
  // correctAnswer: 1
  // },

  {
    title: 'Are we in the Matrix?',
    answer1: 'Lenova',
    answer2: 'Mac',
    answer3: 'Chromebook',
    answer4: 'Dell',
    correctAnswer: 1
  }
]

document.getElementById('question-title').innerHTML = data[currentQuestion].title
document.getElementById('answer1').innerHTML = data[currentQuestion].answer1

function startQuiz () {
  document.getElementById('QuestionBox').style.display = 'block'
  document.getElementById('QuizRules').style.display = 'none'
}

function nextQuestion () {
  currentQuestion += 1

  if (currentQuestion === data.length) { // have we gone past the end?
    document.getElementById('QuizOver').style.display = 'block'
    document.getElementById('QuestionBox').style.display = 'none'
  } else {
    document.getElementById('question-title').innerHTML = data[currentQuestion].title
  }
}

document.getElementById('Start').addEventListener('click', startQuiz)

document.getElementById('submit').addEventListener('click', nextQuestion)

// Todo

// add options
// check answer on answer submit

// Timer
// ======
// timer ends, end quiz
// wrong answer subtract 10s

// Score
// =====
// load previous scores from local storage
// calculate score
// submit initials
// save score + initials
// reset quiz
// clear scores
