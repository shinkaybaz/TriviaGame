// $(document).ready(function () {

//     };

    $("#start").on('click', function(){
            // console.log("You Clicked Me!");
            game.start();
            
            
    })

var questions = [{
    question: "Name the world's biggest island?",
    answers: ["Great Britain", "Greenland", "Australia", "Singapore", "New Zealand"],
    correctAnswer: "Greenland"
}, {
    question: "How many teams are there in the American National Football League?",
    answers: ["10", "15", "22", "28", "32"],
    correctAnswer: "32"
}, {
    question: "What is the capital city of Spain?",
    answers: ["Madrid", "Barcelona", "Valencia", "Cordoba", "Seville"],
    correctAnswer: "Madrid"
}, {
    question: "When did the Cold War end?",
    answers: ["1959", "1999", "1979", "1989", "1969"],
    correctAnswer: "1989"
}, {
    question: "What color is Absynthe beverage?",
    answers: ["Red", "Green", "Orange", "Purple", "White"],
    correctAnswer: "Green"
}, {
    question: "Who played Neo in The Matrix?",
    answers: ["Ian Bliss", "Harry Lennix", "Laurence Fishburne", "Keanu Reeves", "Clayton Watson"],
    correctAnswer: "Keanu Reeves"
}, {
    question: "What is the diameter of Earth?",
    answers: ["8000 miles", "10,000 miles", "5,000 miles", "2,000 miles", "earth isn't round"],
    correctAnswer: "8000 miles"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("time is up!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval (game.countdown,1000);
        $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                console.log(questions[i]);
                
                $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
    },
    done: function (){
        $.each($('input[name="question-0"]:checked'), function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'), function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'), function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'), function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4"]:checked'), function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5"]:checked'), function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6"]:checked'), function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7"]:checked'), function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
        },

        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();
            $('#subwrapper').html("<h2>All done! </h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");

        }

    };
