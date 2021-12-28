//reference elements

var timerEl = document.getElementById("count-down");
var progressEl = document.getElementById("progress");
var questionBtnEl = document.getElementById("buttons");
var currentQuestionEl = document.getElementById("question");
var startBtnEl = document.getElementById("startBtn");
var nextBtnEl = document.getElementById("nextBtn");

//Quiz Variables
var quizTime = 120
var quizTimer
var score=0;
var reduce_time_for_wrong_answer = 20; //20 secs

var currentQuestionIndex = 0;
var questions = [{
    text: "what color is the sky?",
    choices: ["blue", "green", "red", "brown"],
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
    startBtnEl.style.visibility = "hidden";
    nextBtnEl.style.visibility = "visible";
    
 //   console.log( nextBtnEl.style.visibility);
    
    timerEl.textContent = `Time: ${quizTime}`;

    //start timerEl

    quizTimer = setInterval(function () {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            endQuiz();
            //showScores();


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
	option =0;
    ques.choices.forEach(element => {

/*
        //create button
        var questionBtn = document.createElement("button")

        //add text to button
        questionBtn.textContent = element

        //append button questionBtnEl
        questionBtnEl.appendChild(questionBtn)
        //add class atribute to button
    questionBtn.setAttribute("class", "btn")
    
 */   
 	  option++;	
	
	 var radiobox = document.createElement('input');
	 radiobox.type = 'radio';
	 radiobox.id = 'question_'+currentQuestionIndex+'_option_'+option;
	 radiobox.value = element;
	 radiobox.name = 'question_'+currentQuestionIndex;

	 var label = document.createElement('label')
	 label.htmlFor = radiobox.id;

	  var description = document.createTextNode(element);
	  label.appendChild(description);

	  var newline = document.createElement('br');

	  var container = questionBtnEl;
	  container.appendChild(radiobox);
	  container.appendChild(label);
	  container.appendChild(newline);	


   // questionBtnEl.onclick = handleQuestionClick

	nextBtnEl.onclick = handleQuestionClick
        // add eventlistener

    })
function handleQuestionClick(){
    //check if right or wrong answer
    var current_question_input = 'input[name="'+'question_'+currentQuestionIndex+'"]:checked';
    
	var getSelectedValue = document.querySelector( 
                current_question_input); 
              
    var current_question_answer =  getSelectedValue.value;
    
    var actual_answer = questions[currentQuestionIndex].answer;
    
    
    //subtract time if wrong
    if(current_question_answer!=actual_answer)
   	{
   		quizTime = quizTime - reduce_time_for_wrong_answer;
   	}
   	else
	   	score++;	 

	currentQuestionIndex ++;
    // check to show if there are more questions
	if(currentQuestionIndex < questions.length)
	{	
	    showQuestion();
	}
	else
	{
		endQuiz();
	}			  	 
}

}

function endQuiz() {

	var name = prompt("Please enter your name", "");
   
	nextBtnEl.style.visibility = "hidden";
	clearInterval(quizTimer);
	currentQuestionIndex =0;
	currentQuestionEl.textContent = "";
	questionBtnEl.innerHTML = ""
	timerEl.textContent = `${name} Your Score: ${score}/${questions.length} in Time : ${quizTime}`
	score=0;
	quizTime=120;	
	startBtnEl.style.visibility = "visible";
}

//Initiate
startBtnEl.addEventListener("click", startQuiz)