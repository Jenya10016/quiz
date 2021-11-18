//reference elements

var timerEl = document.getElementById("count-down");
var progressEl = document.getElementById("progress");
var questionBtnEl = document.getElementById("buttons");
var currentQestionEl = document.getElementById("question");
var startBtnEl = document.getElementById("startBtn");

//Quiz Variables
var quizTime = 120
var quizTimer
var currentQuestion
var timerID



//logic
function startQuiz(){
    console.log("start quiz")


    // hide start buttons
    startBtnEl.style.display = "none";
    timerEl.textContent = `Time: ${quizTime}`;

    //start timerEl

    quizTimer = setInterval (function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();


        }else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            timerEl.textContent = `Time: ${quizTime}`;
        }
    },1000)

    

    //show question


}


function endQuiz(){



}

//Initiate
startBtnEl.addEventListener("click", startQuiz)



