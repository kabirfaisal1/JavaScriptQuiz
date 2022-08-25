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
//2. modile the title
questionTitleEl.textContent = jsQuestion1.questionTitle;