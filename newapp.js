//reference elements

var timerEl = document.getElementById("count-down");
var progressEl = document.getElementById("progress");
var questionBtnEl = document.getElementById("buttons");
var currentQuestionEl = document.getElementById("question");
var startBtnEl = document.getElementById("startBtn");

//Quiz Variables
var quizTime = 120
var quizTimer

var currentQuestionIndex = 0;
var questions = [{
    text: "what color is the sky?",
    choices: ["blue", "green", "red", "brown", 1],
    answer: "blue"
},
{
    text: "what color is fire?",
    choices: ["blue", "green", "red", "brown"],
    answer: "red"
},
{
    text: "what color is grass?",
    choices: ["blue", "green", "red", "brown"],
    answer: "green" 
}
]

//logic
function startQuiz() {
    console.log("start quiz")

    // hide start buttons
    startBtnEl.style.display = "none";
    timerEl.textContent = `Time: ${quizTime}`;

    //start timerEl

    quizTimer = setInterval(function () {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();


        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            timerEl.textContent = `Time: ${quizTime}`;
        }
    }, 1000)


    //show question
    showQuestion()
}

function showQuestion() {
    //grab question
    var ques = questions[currentQuestionIndex]

    //update html
    currentQuestionEl.textContent = ques.text
    questionBtnEl.innerHTML = ""

    ques.choices.forEach(element => {

        //create button
        var questionBtn = document.createElement("button")

        //add text to button
        questionBtn.textContent = element

        //append button questionBtnEl
        questionBtnEl.appendChild(questionBtn)


        //add class atribute to button
    questionBtn.setAttribute("class", "btn")


    questionBtnEl.onclick = handleQuestionClick


        // add eventlistener




    })
function handleQuestionClick(){
    //check if right or wrong answer

    //subtract time if wrong

    // check to show if there are more questions


    currentQuestionIndex ++;
    showQuestion()
}

}




function endQuiz() {



}

//Initiate
startBtnEl.addEventListener("click", startQuiz)



