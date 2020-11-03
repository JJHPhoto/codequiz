// My variables

// My psuedocode notes

// Need to build an array of questions that I can cycle through. The will need a question, 4 options with buttons and a correct answer. They then need to show if you're correct. If you're wrong, I need to reduce 10 seconds off the timer. When the user clicks on an aswer, the button should go to an "active" state and then move the user to the next question.

// On the "QuizOver" screen, there needs to be an "active" state when entering initials and when you click the "submit" button.

let currentQuestion = 0

const data = [
  {
    title: 'What computer did Steve Jobs make?',
    options: ['Lenova', 'Mac', 'Chromebook', 'Dell'],
    answer: 1

  },

  {
    title: 'Why is Logan so smart?'
  },

  {
    title: 'Why does Nikon suck?'
  },

  {
    title: 'Did George Lucas steal the plot of Star Wars from Dune?'
  }
]

const titleElement = document.getElementById('question-title')
titleElement.innerHTML = data[currentQuestion].title

document.getElementById('submit').addEventListener('click', function () {
  currentQuestion += 1
  document.getElementById('question-title').innerHTML = data[currentQuestion].title
})

console.log()
