// create a start button for the quiz
// create a timer for the quiz
// create series of questions with timer subtracting after incorrect answers 
// when all questions are answered timer reaches 0 and quiz is over
// when game is over I can save my initials and score

const quizData = [ 
{
    question: "What does CSS stand for?",
    answers: ['Collecting Silly Stamps', 'Cascading Style Sheets', 'Cascading Single Sheet', 'Cats Standing Still'],
    correctAnswer: 'Cascading Style Sheets',
   
 
},

{
    question: "What does HTML stand for?",
    answers: ['Humans Take Much Longer', 'Hypertext Mixup Language', 'How to Make Lasagna', 'Hypertext Markup Language'],
    correctAnswer: 'Hypertext Markup Language',

},

{
    question: "True of False? Java and Javascript mean the same thing?",
    answers: ['True', 'False'],  
    correctAnswer: "False",
},

{
    question: "What is the value that evaluates to true or False?",
    answers: ['String', 'Null', 'Undefined', 'Boolean'],
    correctAnswer: "Boolean",

},
];
let currentQuiz = 0;
let score = 0;

let maxTime = 40;
function startTimer(){
    document.getElementById('timer').innerHTML = 'timer: ' + maxTime;
    
}






 

 

 








    








