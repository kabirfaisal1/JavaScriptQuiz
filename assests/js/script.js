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


//global varable 
var score = null;
var answer = null;
var point = 25;
var timeLeft = 60;
var arrayNum = null;
var lastQuestionIndex = questionsArray.length-1; //this to get that last index of questionsArray
var currentQuestionIndex =0; //this to get that current (running) index of questionsArray
var count=0;

startQuizButtonEl.addEventListener("click", () => {
    startQuiz();
})

function startQuiz() {
    score = null;
  
    console.log("we are inside startQuiz function");
    quizInfoEl.style.setProperty("visibility", "hidden"); //hiding the info
    questonListEl.style.setProperty("visibility", "visible"); //displaying the question box
    choiceRosponEl.style.setProperty("visibility", "visible");//displaying the question footer
    console.log("we are inside startQuiz function: set the visibility for elemnts");
    countdown();
    renderQuizQuestion();
}
function renderQuizQuestion(){
    var qDisplayed = questionsArray[currentQuestionIndex]; //getting the current question to queue
   
    questionTitleEl.textContent = qDisplayed.questionTitle; //display the question on the header
    displayMultipleChoice(qDisplayed.choiceList); //display all the Multiple Choice on the answerList
    //add Event Listener for user selected choice
    answerChoiceListEl.addEventListener("click", (event) =>{  
    answer =qDisplayed.correctAnswer; //setting the correctAnswer
    validatingAnswer(answer,event);})  //function for  validating Answer after selection
    
}

//display all the Choice UI
function  displayMultipleChoice(qDisplayed){
    multipleChoiceBtnEl.forEach( (element, index) =>{
        element.textContent = qDisplayed[index];
    })
}

//function for  validating Answer after selection
function validatingAnswer(answer,event) {
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
            console.log("Wrong");
            scoreEl.textContent = score * point;
            timeLeft = timeLeft-10;
        }
    }
    if(currentQuestionIndex < lastQuestionIndex){
        currentQuestionIndex++;
        renderQuizQuestion();
    }else{
        clearInterval(Timer);
    }
}

function countdown(){
   // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
   var timeInterval = setInterval(function () {
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
      // Call the `displayMessage()` function
    }
  }, 1000);
}

