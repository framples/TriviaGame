
//oject with questions
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

//functions to make buttons actually do something
$("#startOverButton").on("click", function () {
    $(this).hide();
    newGame();

});

$("#startButton").on("click", function () {
    $(this).hide();
    newGame();

});

// function to create a new game
function newGame() {

    $("#correctAnswer").empty();
    $("#incorrectAnswer").empty();
    $("#unanswered").empty();
    $("#answered").empty();

    currentQuestion = 0;
    answered = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;

    newQuestion();

}
// function to start new question
function newQuestion() {
    $("#message").empty();
    $("#correctedAnswer").empty();
    $("#gif").empty();
    answer = true;

    $("#currentQuestion").html("Question #" + (currentQuestion + 1) + "/" + triviaQuestions.length);
    $(".question").html("<h2>" + triviaQuestions[currentQuestion].question + "</h2>");

    for (var i = 0; i < 4; i++) {
        var choices = $("div");
        choices.text(triviaQuestions[currentQuestion].possibleAnswers[i]);
        choices.attr({ "data-index": i });
        choices.addClass("thisChoice");
        $(".answerList").append(choices);
    }

    countdown();

    $(".thisChoice").on("click", function () {
        userSelect = $(this).data("index");
        clearInterval(time);

        answerPage();
    });

}

function countdown() {
    seconds = 30;
    $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
    answered = true;
    time = setInterval(showCountdown, 1000);

}

function showCountdown() {
    seconds--;
    $("#timeleft").html("<h3>Time Remaining: " + seconds + "</h3>");
    if (seconds < 1) {
        clearInterval(time);
        answered = false;
        answerPage();
    }

}

function answerPage() {
    $("#currentQuestion").empty();
    $(".thisChoice").empty();
    $(".question").empty();

    var rightAnswerText = triviaQuestions[currentQuestion].possibleAnswers[triviaQuestions[currentQuestion].answer];
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
    $('#gif').html('<img src = "assets/images/'+ gifArray[currentQuestion] +'.gif" width = "400px">');

    if ((userSelect == rightAnswerIndex) && (answered == true)) {
        correctAnswer++;
        $("#message").html(messages.correct);
    } else if ((userSelect != rightAnswerIndex) && (answered == true)) {
        incorrectAnswer++;
        $("#message").html(messages.incorrect);
        $("#correctedAnswer").html("The correct answer was: " + rightAnswerText);

    } else {
        unanswered++;
        $("#message").html(messages.timesUp);
        $("#correctedAnswer").html("The correct answer was: " + rightAnswerText);
        answered = true;

    }

    if (currentQuestion == (triviaQuestions.length - 1)) {
        setTimeout(scoreboard, 5000)
    } else {
        currentQuestion++;
        setTimeout(newQuestion, 5000);
    }


}

function scoreboard() {
    $("#timeLeft").empty();
    $("#mesage").empty();
    $("#correctedAnswer").empty();
    $("#gif").empty();

    $("#finalMessage").html(messages.finished);
    $("#correctAnswers").html("Correct Answers: " + correctAnswer);
    $("#incorrectAnswer").html("Incorect Answers: " + incorrectAnswer);
    $("#unanswered").html("Unanswered " + unanswered);
    $("#startOverButton").addClass("reset");
    $("#startOverButton").show();
    $("#startOverButton").html("Test your wits again?");

}


