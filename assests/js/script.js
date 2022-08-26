
var startQuizButtonEl = document.getElementById('startQuizButton');
var quizDEl = document.querySelector('.middleContainer');
var questonListEl = document.querySelector('.questonList');
var multipleChoiceListEl = document.querySelectorAll('.answerbtn');
var choiceRosponEl = document.getElementById('correctOrWrong');
var scoreEl = document.getElementById('highScore');
var headerScoreTextEl = document.getElementById('headerScoreText')

var questionsArray = [
"JavaScript written under which of the following tag",
"A variable in JavaScript declared with which of the following keyword?",
"Which of the followings are primitive data types in JavaScript?",
"Which of the following is NOT a JavaScript object?",
"Which of the following is NOT a correct way of declaring an array in JavaScript?"
]
var jsQuestion1 = {
    questionTitle: "JavaScript written under which of the following tag",
    multipleChoice: ['<JavaScript></JavaScript>','<script></script>', '<code></code>', '<head></head>'],
    correctAnswer: 1
}
var jsQuestion2 = {
    questionTitle: "A variable in JavaScript declared with which of the following keyword?",
    multipleChoice: ['new', 'int','string','var'],
    correctAnswer: 3
}
var jsQuestion3 = {
    questionTitle: "Which of the followings are primitive data types in JavaScript?",
    multipleChoice: ['String', 'Number','Boolean','All of the above'],
    correctAnswer: 3
}
var jsQuestion4 = {
    questionTitle: "Which of the following is NOT a JavaScript object?",
    multipleChoice: ['var obj ={}', 'var obj ={name: "Kabir"}','var obj={name = "Kabir"}','var obj = new Object()'],
    correctAnswer: 2
}
var jsQuestion5 = {
    questionTitle: "Which of the following is NOT a correct way of declaring an array in JavaScript?",
    multipleChoice:  ['var arr= [1, "two",3,4]', 'var arr= new Array()','var[] arr= new Number()[5]','None of the above'],
    correctAnswer: 2
}

//selecting dom element for question Title
var questionTitleEl = document.getElementById('question');


startQuizButtonEl.addEventListener("click", ()=>{
    startQuiz();
})
function startQuiz(){
   
    console.log("Entering pop up startQuiz function");
    quizDEl.style.setProperty('visibility','hidden');
    questonListEl.style.setProperty('visibility','visible');
    choiceRosponEl.style.setProperty('visibility','visible');
    var i = 0;
    while (i < questionsArray.length){
        questionTitleEl.textContent = questionsArray[i];
        console.log(`i on ${questionsArray[i]}`);
        if(questionsArray[i] === jsQuestion1.questionTitle){
            multipleChoiceListEl.forEach(function(element, index){
            element.textContent = jsQuestion1.multipleChoice[index];
            element.addEventListener('click', function(){
                if(jsQuestion1.correctAnswer == index){
                    choiceRosponEl.textContent = "Correct";
                    console.log("correct");
                    scoreEl.textContent = 20;
                }
                else{
                    choiceRosponEl.textContent = "Wrong";
                }
            })

            
         })
        }
        i++;
    }
}