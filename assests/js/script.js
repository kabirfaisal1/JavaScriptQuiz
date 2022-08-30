
//Selecters
var startQuizButtonEl = document.getElementById("startQuizButton");
var quizInfoEl = document.querySelector(".middleContainer");
var questonListEl = document.querySelector(".questonList")
var questionTitleEl = document.getElementById("questionTitle");
var multipleChoiceBtnEl = document.querySelectorAll(".answerbtn");
var choiceRosponEl = document.getElementById("correctOrWrong");
var scoreEl = document.getElementById("highScore");
var headerScoreTextEl = document.getElementById("headerScoreText");
var answerChoiceListEl = document.querySelector(".answerList");
var timerEl = document.getElementById("timeLeft");
var scoreCardEl = document.querySelector(".scoreCard")
var yourFinalScoreEl = document.getElementById("yourFinalScore")
var scoreStickerEl = document.getElementById("scoreSticker");

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
    },
]


//global varable 
var score = 0;
var timeLeft = 60;
var lastQuestionIndex = questionsArray.length - 1; //this to get that last index of questionsArray
var runningQuestion = 0; //this to get that current (running) index of questionsArray
var timeInterval;


startQuizButtonEl.addEventListener("click", () => {
    startQuiz();
})

function startQuiz() {

    console.log("we are inside startQuiz function");
    quizInfoEl.style.setProperty("visibility", "hidden"); //hiding the info
    questonListEl.style.setProperty("visibility", "visible"); //displaying the question box
    choiceRosponEl.style.setProperty("visibility", "visible");//displaying the question footer
    console.log("we are inside startQuiz function: set the visibility for elemnts");
    renderQuizQuestion();
    countdown();
}
function renderQuizQuestion() {
    var qDisplayed = questionsArray[runningQuestion]; //getting the current question to queue

    questionTitleEl.textContent = qDisplayed.questionTitle; //display the question on the header
   displayMultipleChoice(); //display all the Multiple Choice on the answerList

}

//display all the options UI
function displayMultipleChoice() {
    multipleChoiceBtnEl.forEach((element, index) => {
        element.textContent = questionsArray[runningQuestion].choiceList[index];
    })
}

//function for  validating Answer after selection
function validatingAnswer(Useranswer) {

    var correctAnswer = questionsArray[runningQuestion].correctAnswer; //setting the correctAnswer
        console.log(`inside userSelect function: ${Useranswer}`);
        if (Useranswer == correctAnswer) {
            choiceRosponEl.textContent = "Correct";
            score++;
            var finalScore = Math.round(100 * score / questionsArray.length);
            scoreEl.textContent = finalScore;
        }
        else {
            choiceRosponEl.textContent = "Wrong";
            console.log("Wrong");
            timeLeft = timeLeft - 10;
            var finalScore = Math.round(100 * score / questionsArray.length);
            scoreEl.textContent = finalScore;
        }
        if (runningQuestion < lastQuestionIndex) {
            runningQuestion++;
            renderQuizQuestion(finalScore);
        }
        else {
            clearInterval(timeInterval);
            scorecardRender();
        }
}

//this function is to display the scorecard
function scorecardRender(finalScore) {
    console.log("inside scoreRender");
    questonListEl.style.setProperty("visibility", "hidden"); //hide the question box
    choiceRosponEl.style.setProperty("visibility", "hidden");//hide the question footer
    scoreCardEl.style.setProperty("visibility", "visible");//display scorecard
    //calculate the amount of question percent
    var scorePerCent = Math.round(100 * score / questionsArray.length);
    yourFinalScoreEl.textContent = scorePerCent;

   /* //choose the img based on the scorepercent
    let img = (scorePerCent >= 80) ? "/assests/images/pass.png" :
        (scorePerCent >= 65) ? "/assests/images/pass.png" :
            (scorePerCent <= 50) ? "../../JavaScriptQuiz/assests/images/pass.png" :
            scoreCardEl.innerHTML = "<img src=" + img + ">";*/

}

function countdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            scoreRender()
        }
    }, 1000);
}

/*TO-DO

function validatingAnswer(event) {
    var element = event.target;
    var answer = questionsArray[runningQuestion].correctAnswer; //setting the correctAnswer
    if (element.matches(".answerbtn")) {
        var dataNumber = parseInt(element.getAttribute("data-number"));
        console.log(`inside userSelect function: ${dataNumber}`);
        if (answer == dataNumber) {
            choiceRosponEl.textContent = "Correct";
            score++;
            var finalScore = Math.round(100 * score / questionsArray.length);
            scoreEl.textContent = finalScore;
        }
        else {
            choiceRosponEl.textContent = "Wrong";
            console.log("Wrong");
            timeLeft = timeLeft - 10;
            var finalScore = Math.round(100 * score / questionsArray.length);
            scoreEl.textContent = finalScore;
        }
        if (runningQuestion < lastQuestionIndex) {
            runningQuestion++;
            renderQuizQuestion(finalScore);
        }
        else {
            clearInterval(timeInterval);
            scorecardRender();
        }
    }
}*/

