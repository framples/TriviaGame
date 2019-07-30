var triviaQuestions = [{

    question: "",
    possibleAnswers: [],
    answer: 0
},

{
    question: "",
    possibleAnswers: [],
    answer: 0
},
{
    question: "",
    possibleAnswers: [],
    answer: 1

},
{
    question: "",
    possibleAnswers: [],
    answer: 3
},

{
    question: "",
    possibleAnswers: [],
    answer: 2

},
{
    question: "",
    possibleAnswers: [],
    answer: 2

},
{
    question: "",
    possibleAnswers: [],
    answer: 2

},
{
    question: "",
    possibleAnswers: [],
    answer: 2

},
{
    question: "",
    possibleAnswers: [],
    answer: 2

},
{
    question: "",
    possibleAnswers: [],
    answer: 2

},
{
    question: "",
    possibleAnswers: [],
    answer: 2

},
{
    question: "",
    possibleAnswers: [],
    answer: 2

},
{
    question: "",
    possibleAnswers: [],
    answer: 2

}];

var messages = {
    incorrect: "Sorry! That answer is incorrect.",
    correct: "Well done! That is correct.",
    timesUp: "Times up! Pencils down...err whatever.",
    finished: "Lets see how you did!"

};

var currentQuestion;
var correctAnswer;
var incorrectAnswer;
var unanswered;
var answered;
var seconds;
var time;
var userAnswer;

var gifAssignment = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12]


$("#startOverButton").on("click", function () {
    $(this).hide();
    newGame();

});

$("#startButton").on("click", function () {
    $(this).hide();
    newGame();

});


function newGame() {

    $("#correctAnswer").empty();
    $("#incorrectAnswer").empty();
    $("#unanswered").empty();
    $("#answered").empty();

    currentQuestion = 0;
    answered = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;

}