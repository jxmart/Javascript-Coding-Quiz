// create a start button for the quiz
// create a timer for the quiz
// create series of questions with timer subtracting after incorrect answers 
// when all questions are answered timer reaches 0 and quiz is over
// when game is over I can save my initials and score
let highScores = document.querySelector("#highscores")
let timer = document.querySelector("#timer")
let intro = document.querySelector('#intro')
let start = document.querySelector('#start')
let question = document.querySelector('#question')
let choices = document.querySelector('#choices')
let answer = document.querySelector('#answer')
let score = document.querySelector('#score')
let initials = document.querySelector('#initials')
let end = document.querySelector('#end')
let begin = document.querySelector('#begin')
let submit =document.querySelector('#submit')

let list = localStorage.getItem('val')
highScores.append(list)

let secondsLeft = 60
let qindex = 0
let userScore = 0
let timerInterval 
const quizData = [ 
{
    question: "What does CSS stand for?",
    answers: ['Collecting Silly Stamps', 'Cascading Style Sheets', 'Cascading Single Sheet', 'Cats Standing Still'],
    correctAnswer: '2',
},
{
    question: "What does HTML stand for?",
    answers: ['Humans Take Much Longer', 'Hypertext Mixup Language', 'How to Make Lasagna', 'Hypertext Markup Language'],
    correctAnswer: '4',
},
{
    question: "True of False? Java and Javascript mean the same thing?",
    answers: ['True', 'False'],  
    correctAnswer: '2',
},
{
    question: "What is the value that evaluates to true or False?",
    answers: ['String', 'Null', 'Undefined', 'Boolean'],
    correctAnswer: '4',
},
]; 
start.addEventListener('click', function(){
    startTimer()
    startGame()
}) 



function startTimer(){
        timerInterval = setInterval(function() {
        secondsLeft--
        timer.textContent = 'Time Left: ' + secondsLeft 

        if (secondsLeft < 1) {
            clearInterval(timerInterval)
            alert ("Stop")
        }
    }, 1000)
}

function startGame(){
    document.querySelector('#intro').style.display = "none"
    document.querySelector('#begin').style.display = "block"

    getQuestion()
}

function getQuestion (){
    question.textContent = quizData[qindex].question

    for (let i = 0; i < quizData[qindex].answers.length; i++) {
        const button = document.createElement('button')
        button.textContent = quizData[qindex].answers[i]
        button.id = (i + 1).toString()
        
        question.append(button)
        button.addEventListener('click', checkAnswer)
           
    }
}
 
function checkAnswer(event){
    const userAnswer = event.target.id
    
    if (userAnswer === quizData[qindex].correctAnswer){
       answer.textContent = 'correct' 
        userScore += 5
    }
    else {
        answer.textContent = "incorrect"
        secondsLeft -= 5
    }
    qindex++
   if (qindex < quizData.length){
    getQuestion()
   }
   else {
    endGame()
   }
}

function endGame (){
    clearInterval(timerInterval)
    begin.style.display = 'none'
    end.style.display = 'block'
    userScore += secondsLeft
    score.append(userScore)
}
    
submit.addEventListener('click', function(event){
    event.target.disabled = true
    saveScore()
})

function saveScore(){
    let name = document.querySelector('input').value
    localStorage.setItem('val', name + ` ` + userScore)
    location.reload()
}




 

 

 








    








