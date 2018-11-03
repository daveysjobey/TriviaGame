$(document).ready(function () {

    var questions = ["Who is the King of Pumpkinland?", "Where did Halloween originate?", "What is the day before Halloween called?", "What type of movie is most commonly associated with Halloween?"]
    var correctAns = ["Jack", "Scotland", "Mischief Night", "Horror"]
    var answers1 = ["The Oogie Boogey Man", "The United States", "Mischief Night", "Horror"]
    var answers2 = ["Santa Claus", "Scotland", "Hallowseve", "Comedy", ]
    var answers3 = ["Jack", "Norway", "Preween", "War"]
    var answers4 = ["The Mayor", "France", "The Night before", "Dog"]
    var images1 = ["assets/images/91saPLC4-aL._UY445_.jpg", "assets/images/1200px-United_States_Map_of_Population_by_State_(2015).svg.png", "assets/images/il_570xN.1152621519_pm91.jpg", "assets/images/horrorclassics_2.0.jpg"]
    var images2 = ["assets/images/santa.jpg", "assets/images/scotland-map-vector-3383691.jpg", "assets/images/images.jpeg", "assets/images/best-sketch-comedy.jpg"]
    var images3 = ["assets/images/jack-skellington-movie-prints.jpg", "assets/images/file_7382deeb-5d4a-4440-9608-fb212ab775d9.png", "assets/images/35-og.jpg", "assets/images/220px-U.S._Marines_in_Operation_Allen_Brook_(Vietnam_War)_001.jpg"]
    var images4 = ["assets/images/Fsdfdafs.png", "assets/images/france-map.gif", "assets/images/onesheet.jpg", "assets/images/Mobile.jpg"]
    var questionNum = 0

    var correct = 0;
    var incorrect = 0;
    
    var guess = "";

    var time =15;

    function nextQuestion () {
        if (questionNum<4) {
            fillContent();
        countdown.start();
        }else{
            time =15;
            countdown.stop();
            endgame();
        }
        

    };

    function endgame(){
        $(".game").hide();

    }

    var countdown = {
        

        start: function () {
            time = 15;
            intervalId = setInterval(countdown.count, 1000);

        },

        count: function () {
            if (time > 0) {
                time--;
            $('#Countdown').text(time);
                
            } else {
                incorrect++;
                questionNum++;
                clearInterval(intervalId);
                alert("Time's UP");
                nextQuestion(); 
                
            }
        },

        stop: function(){
            clearInterval(intervalId);
        }

    }


    function fillContent() {
        for (i = 1; i < 5; i++) {
            $("#question").html("<h3 class='text-orange'>" + questions[questionNum] + "</h3>");
            $("#ans1").html("<h3 class='text-orange'>" + answers1[questionNum] + "</h3>");
            $("#ans2").html("<h3 class='text-orange'>" + answers2[questionNum] + "</h3>");
            $("#ans3").html("<h3 class='text-orange'>" + answers3[questionNum] + "</h3>");
            $("#ans4").html("<h3 class='text-orange'>" + answers4[questionNum] + "</h3>");
            $("#img1").attr("src", images1[questionNum]);
            $("#img2").attr("src", images2[questionNum]);
            $("#img3").attr("src", images3[questionNum]);
            $("#img4").attr("src", images4[questionNum]);
            $("#s1").attr("value", answers1[questionNum]);
            $("#s2").attr("value", answers2[questionNum]);
            $("#s3").attr("value", answers3[questionNum]);
            $("#s4").attr("value", answers4[questionNum]);
        }
    };

    $(".select").on("click", function () {
        guess = $(this).attr("value");
        console.log (guess);
        countdown.stop();

        if (guess === correctAns[questionNum]){
            correct++;
            questionNum++;
            clearInterval(intervalId)
            alert("Correct!")
            nextQuestion();
            
        }else {
            incorrect++;
            questionNum++;
            clearInterval(intervalId)
            alert("False!")
            nextQuestion();
        }
        console.log (correct);
        console.log (incorrect);

    });

    nextQuestion();


    






});