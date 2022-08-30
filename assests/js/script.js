
//Selecters
var startQuizButtonEl = document.getElementById("startQuizbtn");
var quizInfoEl = document.querySelector(".middleContainer");
var questonListEl = document.querySelector(".questonList")
var questionTitleEl = document.getElementById("questionTitle");
var multipleChoiceBtnEl = document.querySelectorAll(".answerbtn");
var choiceRosponEl = document.getElementById("correctOrWrong");
var innerHighScoreEl = document.getElementById("innerhighScore");
var headerScoreTextEl = document.getElementById("headerScoreText");
var answerChoiceListEl = document.querySelector(".answerList");
var timerEl = document.getElementById("timeLeft");
var scoreCardEl = document.querySelector(".scoreCard")
var userFinalScoreEl = document.querySelector("#yourFinalScore")
var scoreStickerEl = document.getElementById("scoreSticker");
var inputInitialsEl = document.querySelector("#inputInitials");
var ViewhighScoreBtnEl = document.getElementById("ViewhighScoreBtn");
var submitQuizbtnEl = document.querySelector("#submitQuizbtn");

//array of questions
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
var score;
var timeLeft;
var lastQuestionIndex = questionsArray.length - 1; //this to get that last index of questionsArray
var runningQuestion = 0; //this to get that current (running) index of questionsArray
var timeInterval;
var scorePerCent;

//startquiz button EventListener
startQuizButtonEl.addEventListener("click", () => {
    startQuiz();
})
//startquiz and function
function startQuiz() {
    scorePerCent=0; //setting scorePerCent to 0 at everytime user click on startQuiz
    runningQuestion = 0;
    score=0;
    timeLeft=60;
    countdown();
    console.log("we are inside startQuiz function");
    quizInfoEl.style.setProperty("visibility", "hidden"); //hiding the info
    questonListEl.style.setProperty("visibility", "visible"); //displaying the question box
    choiceRosponEl.style.setProperty("visibility", "visible");//displaying the question footer
    console.log("we are inside startQuiz function: set the visibility for elemnts");
    renderQuizQuestion();
  
}
//rendering question and function
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

    }
    else {
        choiceRosponEl.textContent = "Wrong";
        console.log("Wrong");
        timeLeft = timeLeft - 10;

    }
    if (runningQuestion < lastQuestionIndex) {
        runningQuestion++;
        renderQuizQuestion();
    }
    else {
        clearInterval(timeInterval);
        scorecardRender();
    }
}

//this function is to display the scorecard
function scorecardRender() {
    console.log("inside scoreRender");
    timerEl.textContent =""; //highing the timer count down
    questonListEl.style.setProperty("visibility", "hidden"); //hide the question box
    choiceRosponEl.style.setProperty("visibility", "hidden");//hide the question footer
    scoreCardEl.style.setProperty("visibility", "visible");//display scorecard
    //calculate the amount of question percent
    scorePerCent = Math.round(100 * score / questionsArray.length);
    userFinalScoreEl.textContent = scorePerCent;
    console.log(`calculated the score percent and displayed in userFinalScoreEl will return the scorePerCent to scorePerCent var`);
    return scorePerCent;
}



//EventListener for submitQuizbtnEl
submitQuizbtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("we are inside submitQuizbtnEl EventListener ");
        // create userInitials and finalScore object from submission
        var userSubmission = {
            initials: inputInitialsEl.value.trim(),
            SubmitScore: scorePerCent
        }
    // set new submission to local storage 
  localStorage.setItem("userinitials", JSON.stringify(userSubmission.initials));
  localStorage.setItem("userScores", JSON.stringify(userSubmission.SubmitScore));

    console.log(`we are inside submitQuizbtnEl EventListener: and stored data in the localStorage`);
    scoreCardEl.style.setProperty("visibility", "hidden");//hiding scorecard after submiting
    quizInfoEl.style.setProperty("visibility", "visible"); //displaying quizInfoEl 
    startQuizButtonEl.innerText = "Retake"; //allow user to retake the quiz if ther are not happy with the score
    console.log(`we are inside submitQuizbtnEl EventListener: redisplayed quizInfoEl and updated the inner text for startQuizButtonEl to retake. to allow user to retake the quiz`);
})

//EventListener for ViewhighScoreBtnEl and get the vaule from localStorage.getItem
ViewhighScoreBtnEl.addEventListener("click", (event) => {
    event.preventDefault();

    console.log("inside ViewhighScoreBtnEl addEventListener");

    var itemKey="userinitials"; //this is the item key I have to get vaule from

    //if local storage do have data continue
    if(localStorage.getItem(itemKey) != null){
        console.log(`inside ViewhighScoreBtnEl addEventListener: checking if localStorage have data for ${itemKey}`);
     console.log(JSON.parse(localStorage.getItem('userScores')));
     console.log(JSON.parse(localStorage.getItem('userinitials')));
   
        var getData = JSON.parse(localStorage.getItem("userScores"));
         
     innerHighScoreEl.innerText= `: ${getData}`;
    }else{ //if no data was found display
        console.log(`inside ViewhighScoreBtnEl addEventListener: localStorage did not have data for ${itemKey}`);
        innerHighScoreEl.innerText= null;
    }
})
//timer countdown function
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
            scorecardRender()
        }
    }, 1000);
}
