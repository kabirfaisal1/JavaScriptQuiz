
var startQuizButtonEl = document.getElementById("startQuizButton");
var quizInfoEl = document.querySelector(".middleContainer");
var questonListEl = document.querySelector(".questonList")
//selecting dom element for question Title
var questionTitleEl = document.getElementById("question");
var multipleChoiceBtnEl = document.querySelectorAll(".answerbtn");
var choiceRosponEl = document.getElementById("correctOrWrong");
var scoreEl = document.getElementById("highScore");
var headerScoreTextEl = document.getElementById("headerScoreText")
var score = null;
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
    point = 25;
    console.log("we are inside startQuiz function");
    quizInfoEl.style.setProperty("visibility", "hidden"); //hiding the info
    questonListEl.style.setProperty("visibility", "visible"); //displaying the question box
    choiceRosponEl.style.setProperty("visibility", "visible");//displaying the question footer

    //answebtn1.setProperty("visibility","visible");
    console.log("we are inside startQuiz function: set the visibility for elemnts");
    var question = null;
    var answer = null;
    /* --This is Good__
    for (var i = 0; i < questionsArray.length; i--) {
        console.log("we are inside startQuiz function: iterating through the questionsArray");

        questionTitleEl.textContent = questionsArray[i].questionTitle;
        console.log("we are inside startQuiz function: set the questionTitle by the iterative");

        multipleChoiceBtnEl.forEach(function (element, index) {
            element.textContent = questionsArray[i].choiceList[index];
            console.log(questionsArray[i].choiceList[index]);
        })

        var answer = questionsArray[i].correctAnswer;
        var answerChoiceListEl = document.querySelector(".answerList");
        answerChoiceListEl.addEventListener("click", function (event) {
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
        })


    }*/

}

