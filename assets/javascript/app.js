
//oject with questions
var triviaQuestions = [{

    question: "In S2E6 'The fight':  What is Dwight's Sensei's name?",
    answerList: ["Ira", "George", "Stuart", "Ivan"],
    answer: 0
},

{
    question: "In S2E10 'Christmas Party': Who ends up with the Video iPod at the end of the episode?",
    answerList: ["Jim", "Pam", "Dwight", "Michael"],
    answer: 2
},
{
    question: "In S2E17 'Dwight's Speech': What infamous dictator's speech does Jim trick Dwight into giving at the sales conference?",
    answerList: ["Adolf Hitler", "Joseph Stalin", "Benito Mussolini", "Mao Zedong"],
    answer: 2

},
{
    question: "In S2E22 'Casino Night': Who has two dates?",
    answerList: ["Creed", "Bob Vance", "Jim", "Michael"],
    answer: 3
},

{
    question: "In S3E9 'The Convict': Which of these things does Prison Mike NOT claim to have been busted for?",
    answerList: ["I kidnapped the President's son", "I stole", "I robbed", "I killed Dumbledore"],
    answer: 3

},
{
    question: "In S5E19  'Two Weeks' What is Michael's signature cocktail?",
    answerList: ["Orange Vodjuiceka", "Scotch and Splenda", "Gin and Tonic", "Whiskey Sour"],
    answer: 1

},
{
    question: "In S5E26 'Company Picnic' What award winning movie do Michael & Holly parody during their presentation?",
    answerList: ["Titanic", "Shawshank Redemption", "Slumdog Millionaire", "Con Air"],
    answer: 2

},
{
    question: "In S6E9 'Murder' There's been a murder in... Where?",
    answerList: ["Scranton", "Savannah", "Atlanta", "Augusta"],
    answer: 1

},
{
    question: "In S6E10 'Shareholder Meeting' Dwight dresses up as a character for Earth Day.  Name that character.",
    answerList: ["The Green Machine", "The Solar Son", "Green Man", "Recyclops"],
    answer: 3

},
{
    question: "In S6E22 'The Cover-Up' Someone pranks Andy into believing there is a corporate conspiracy involving Sabre's smoking printers.  Who was the pranker?",
    answerList: ["Jim", "Darryl", "Gabe", "Kevin"],
    answer: 1

},
{
    question: "In S6E24 'Whistleblower' What new company is David Wallace involved in?",
    answerList: ["Stuck it", "Chuck it", "Suck it", "Bunt it"],
    answer: 2

},
{
    question: "In S7E6 'Costume Contest' what famous music artist does Gabe dress as?",
    answerList: ["Britney Spears", "Lady Gaga", "Christina Agulera", "Baby Spice"],
    answer: 1

},
{
    question: "In S7E12 'Ultimatum' What is Creed's New Year's resolution?",
    answerList: ["To lose 10 pounds", "To complete a perfect cartwheel", "To read more", "To paint a picture"],
    answer: 1

}];

var currentQuestion;
var correctAnswer;
var incorrectAnswer;
var unanswered;
var answered;
var seconds;
var time;
var userSelect;

var messages = {
    incorrect: "Sorry! That answer is incorrect.",
    correct: "Well done! That is correct.",
    endTime: "Times up!",
    finished: "Lets see how you did!",

};


//functions to make buttons actually do something
$("#startBtn").on("click", function () {
    $(this).hide();
    newGame();

});

$("#startOverBtn").on("click", function () {
    $(this).hide();
    newGame();

});

// function to create a new game
function newGame() {

    $("#correctAnswers").empty();
    $("#incorrectAnswers").empty();
    $("#unanswered").empty();
    $("#finalMessage").empty();

    currentQuestion = 0;
    unanswered = 0;
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
        var choices = $("<div>");
        choices.text(triviaQuestions[currentQuestion].answerList[i]);
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
    seconds = 20;
    $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
    answered = true;
    time = setInterval(showCountdown, 1000);

}

function showCountdown() {
    seconds--;
    $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
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

    var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
    
    

    if ((userSelect == rightAnswerIndex) && (answered == true)) {
        correctAnswer++;
        $("#message").html(messages.correct);
    } else if ((userSelect != rightAnswerIndex) && (answered == true)) {
        incorrectAnswer++;
        $("#message").html(messages.incorrect);
        $("#correctedAnswer").html("The correct answer was: " + rightAnswerText);

    } else {
        unanswered++;
        $("#message").html(messages.endTime);
        $("#correctedAnswer").html("The correct answer was: " + rightAnswerText);
        answered = true;

    }

    if (currentQuestion == (triviaQuestions.length-1)) {
        setTimeout(scoreboard, 3000)
    } else {
        currentQuestion++;
        setTimeout(newQuestion, 3000);
    }


}

function scoreboard() {
    $("#timeLeft").empty();
    $("#message").empty();
    $("#correctedAnswer").empty();

    $("#finalMessage").html(messages.finished);
    $("#correctAnswers").html("Correct Answers: " + correctAnswer);
    $("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswer);
    $("#unanswered").html("Unanswered " + unanswered);
    $("#startOverBtn").addClass("reset");
    $("#startOverBtn").show();
    $("#startOverBtn").html("Test your wits again?");

}


