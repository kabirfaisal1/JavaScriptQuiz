//Selecters
var startQuizButtonEl = document.getElementById("startQuizButton");
var quizInfoEl = document.querySelector(".middleContainer");
var questonListEl = document.querySelector(".questonList")
var questionTitleEl = document.getElementById("questionTitle");
var multipleChoiceBtnEl = document.querySelectorAll(".answerbtn");
var choiceRosponEl = document.getElementById("correctOrWrong");
var scoreEl = document.getElementById("highScore");
var headerScoreTextEl = document.getElementById("headerScoreText");
var timerEl = document.getElementById("timeLeft");


//global varable 
var score = null;
var answer = null;
var point = 25;
var timeLeft = 60;
var arrayNum = null;


var questionsArray = [
    {
        questionTitle: "JavaScript written under which of the following tag",
        choiceList: ["<JavaScript></JavaScript>", "<script></script>", "<code></code>", "<head></head>"],
        correctAnswer: 1
    },

    {
        questionTitle: "A variable in JavaScript declared with which of the following keyword?",
        choiceList: ["new", "int", "string", "var"],
        correctAnswer: 3
    },
    {
        questionTitle: "Which of the followings are primitive data types in JavaScript?",
        choiceList: ["String", "Number", "Boolean", "All of the above"],
        correctAnswer: 3
    },
    {
        questionTitle: "Which of the following is NOT a JavaScript object?",
        choiceList: ["var obj ={}", "var obj ={name: 'Kabir'}", "var obj={name = 'Kabir'}", "var obj = new Object()"],
        correctAnswer: 2
    }
]


startQuizButtonEl.addEventListener("click", () => {
    startQuiz();
})

function startQuiz() {
    score = null;

    console.log("we are inside startQuiz function");
    quizInfoEl.style.setProperty("visibility", "hidden"); //hiding the info
    questonListEl.style.setProperty("visibility", "visible"); //displaying the question box
    choiceRosponEl.style.setProperty("visibility", "visible");//displaying the question footer

    //answebtn1.setProperty("visibility","visible");
    console.log("we are inside startQuiz function: set the visibility for elemnts");
    var question = null;
    var answer = null;

    for (var i = 0; i < questionsArray.length; i--) {
        console.log("we are inside startQuiz function: iterating through the questionsArray");

        questionTitleEl.textContent = questionsArray[i].questionTitle;
        console.log("we are inside startQuiz function: set the questionTitle by the iterative");
        return array=i;
        break;
    }
        multipleChoiceBtnEl.forEach( (element, index) =>{
            displayMultipleChoice(element, index);
          
        })
        var answerChoiceListEl = document.querySelector(".answerList");
        answerChoiceListEl.addEventListener("click", (event) => {
            validatingAnswer(event);
        })


}


function  displayMultipleChoice(element, index){
    element.textContent = questionsArray[array].choiceList[index];
    console.log(questionsArray[array].choiceList[index]);
    return answer = questionsArray[array].correctAnswer;
}

function validatingAnswer(event) {
    var element = event.target;
    if (element.matches(".answerbtn")) {
        var dataNumber = parseInt(element.getAttribute("data-number"));

        console.log(`inside userSelect function: ${dataNumber}`);
        if (dataNumber == answer) {
            choiceRosponEl.textContent = "Correct";
            console.log("correct");
            score++;
            scoreEl.textContent = score * point;
        }
        else {
            choiceRosponEl.textContent = "Wrong";
        }
    }
}

