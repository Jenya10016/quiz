//reference elements

var timerEl = document.getElementById("count-down");
var progressEl = document.getElementById("progress");
var questionBtnEl = document.getElementById("buttons");
var currentQestionEl = document.getElementById("question");
var startBtnEl = document.getElementById("startBtn");

//Quiz Variables
var score 
var currentQuestion



//logic
function startQuiz(){
    console.log("start quiz")


    // hide start buttons
    startBtnEl.style.display = "none";

    //start timerEl

    let time = 5;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval (function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        }else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.textContent = `Time: ${min} : ${sec}`;
        }
    },1000)

    //show question


}


function endQuiz(){



}

//Initiate
startBtnEl.addEventListener("click", startQuiz)



