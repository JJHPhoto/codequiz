# Quiz

This week's homework assignment was to create a quiz with a timer that added time if the answer was correct and reduced time if the answer was wrong. We also needed to have a page that kept high scores from previous attempts at the quiz. This would be done using local storage but also need to be able to be cleared if the user wanted to.

### 1. Process

The first thing to do was to read over the README & then mark up the gif we were given to see what elements would be on each page. This would let me be able to decide what goes onto each page. I hide most of my HTML elements to be called on later during and after the quiz.

Next I worked on getting to an endpoint so that I could fill in the code along the way. I wanted to make sure I could proceed through the questions to the end of the quiz. This made me change my HTML elements from classes to Ids with onclick buttons that triggered functions in my JS.

The next step was figuring out my timer and score. The first step was to get the score to work. I wanted to make sure that was good to go. Then I could focus on how the timer worked. Which took a while to get working. I remembered that my instructor had mentioned one way we could do it was with setInterval. Dug through some answers on W3Schools and Stackflow till I found one I could take apart to fit my code. I was then able to put my scoring into this function.

As I was working through my JS, it was fun to see repeating code and be able to create functions out of that code that I could use elsewhere. It really felt like things were coming together and finally making some sense. Some.

Next I worked on being able to submit the user's initials and store their scores in local storage. I was able to do this after a few hours of trying to figure out/remember how local storage works, but then I needed to figure out how to get my data out of local storage with JSON.parse.

As I was working in local storage, I was detecting some bugs that I knew I would need to fix. However, I wanted to get to the end of the line to see where that was so that I knew I could get there.

### Resources

[W3Schools](https://www.w3schools.com/)
["How to use Local Storage with JavaScript" by Tania Rascia](https://www.taniarascia.com/how-to-use-local-storage-with-javascript/)

### Screenshot of working application
