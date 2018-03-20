$(document).ready(function () {

    var trivia = {

        questions: [
            {
                question: "Name the world's biggest island?",
                possibles: ["Great Britain", "Greenland", "Australia", "Singapore", "New Zealand"],
                id: "question-one",
                answer: "Greenland",
                image: "assets/images/greenland.gif"
            }, {
                question: "How many teams are there in the American National Football League?",
                possibles: ["10", "15", "22", "28", "32"],
                id: "question-two",
                answer: "32",
                image: "assets/images/football.gif"

            }, {
                question: "What is the capital city of Spain?",
                possibles: ["Madrid", "Barcelona", "Valencia", "Cordoba", "Seville"],
                id: "question-three",
                answer: "Madrid",
                image: "assets/images/madrid.gif"
            }, {

            }, {
                question: "When did the Cold War end?",
                possibles: ["1959", "1999", "1979", "1989", "1969"],
                id: "question-four",
                answer: "1989",
                image: "assets/images/coldwar.gif"
            }, {
                question: "What color is Absynthe beverage?",
                possibles: ["Red", "Green", "Orange", "Purple", "White"],
                id: "question-five",
                answer: "Green",
                image: "assets/images/absynthe.gif"
            }, {
                question: "Who played Neo in The Matrix?",
                possibles: ["Ian Bliss", "Harry Lennix", "Laurence Fishburne", "Keanu Reeves", "Clayton Watson"],
                id: "question-six",
                answer: "Keanu Reeves",
                image: "assets/images/neo.gif"
            }, {
                question: "What is the diameter of Earth?",
                possibles: ["8000 miles", "10,000 miles", "5,000 miles", "2,000 miles", "earth isn't round"],
                id: "question-seven",
                answer: "8000 miles",
                image: "assets/images/earth.gif"
            },]
    };

    var seconds = 30;
    var triviaQs = trivia.questions;
    var counter = 0;
    var gameOverMessage = "Game Over!";
    var timeUpMessage = "Time's Up!";

    $(".start-game").on("click", function () {
        $('.main-container').show();
        $(this).hide();
        countdown();

    });

    function decrement() {
        seconds--;
        var timeRemaining = ('<h2>');
        $('#time-remaining').html(timeRemaining + "Seconds Remaining: " + seconds);
        if (seconds === 0) {
            stop();
            $('.message').html(timeUpMessage);
            result();
        }
    };

    function countdown() {
        counter = setInterval(decrement, 1000);
    };

    function stop() {
        clearInterval(counter);
    };

    function formTemplate(data) {
        var questionString = " <form class='question'> " + data.question + "<br>";
        var possibles = data.possibles;
        for (var i = 0; i < possibles.length; i++) {
            var possibleAnswers = possibles[i];
            console.log(possibleAnswers);
            questionString = questionString + " <input type='radio' name= '" + data.id + "' value= " + i + " > " + possibleAnswers;
        }
        return questionString + "</form>";
    }

    function buildQuestions() {
        var questionHTML = ''
        for (var i = 0; i < triviaQs.length; i++) {
            questionHTML = questionHTML + formTemplate(triviaQs[i]);
        }
        $('#questions-container').append(questionHTML);
    };

    buildQuestions();

    function isCorrect(data) {
        var answers = $(data.id);
        var correct = answers.eq(data.answer);
        var isChecked = correct.is(':checked');
        return isChecked;
    };

    function checkAnswered(data) {
        var anyAnswered = false;
        var answers = $(data.id);
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                anyAnswered = true;
            }
        }
        return anyAnswered;

    };

    function result() {
        var resultsHTML = '';
        var guessedAnswers = [];
        var correct = 0;
        var incorrect = 0;
        var unAnswered = 0

        for (var i = 0; i < triviaQs.length; i++) {
            if (isCorrect(triviaQs[i])) {
                correct++;
            } else if (checkAnswered(triviaQs[i])) {
                incorrect++;
            } else {
                unAnswered++;
            }
        }

        $('.results').html('correct: ' + correct + "<br>" + 'incorrect: ' + incorrect + "<br>" + 'unanswered: ' + unAnswered);
    };

    $('.done-button').on('click', function () {
        result();
        stop();
        $("#messageDiv").html(gameOverMessage);
    });


});


//PSEUDO CODE
// for some reason the questions wouldnt show on the main game page
