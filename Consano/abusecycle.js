   const questions = [
      {
        question: "Kaylee starts to feel nervous every time she hangs out with Polly because Polly makes passive aggressive comments. ",
        answers: [
          { text: "Tension building", correct: true},
          { text: "Incident", correct: false },
          { text: "Reconciliation", correct: false },
          { text: "Calm", correct: false }
        ]
      },
      {
        question: "Kaylee drops a test tube in a practical and Polly starts shouting at her.",
        answers: [
          { text: "Tension building", correct: false},
          { text: "Incident", correct: true },
          { text: "False Peace", correct: false },
		  { text: "Calm", correct: false }
         
        ]
      },
      {
        question: "Polly starts overly complimenting Kaylee when she starts to distance herself.",
        answers: [
          { text: "Tension building", correct: false},
          { text: "Incident", correct: false },
          { text: "Reconciliation", correct: true },
		  { text: "Calm", correct: false }
          
        ]
      },
      {
        question: "James gives Nathan the silent treatment when Nathan doesn't tell him something.",
        answers: [
		  { text: "Tension building", correct: true},
          { text: "Incident", correct: false },
          { text: "Reconciliation", correct: false },
		  { text: "Calm", correct: false }
          
        ]
      },
      {
        question: "James tells Nathan that he's sorry if Nathan feels a certain way when Nathan seems upset.",
        answers: [
         { text: "Tension building", correct: false},
          { text: "Incident", correct: false },
          { text: "Reconciliation", correct: true},
		  { text: "Calm", correct: false }
          
        ]
      }
    ];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestion();
    }

    function showQuestion() {
	  resetState();
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

      

      currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
		if (answer.correct){
			button.dataset.correct=answer.correct;
		}
		button.addEventListener("click",selectAnswer);
      });
	
    }
	
	function resetState(){
		nextButton.style.display="none";
		while(answerButton.firstChild){
			answerButton.removeChild(answerButton.firstChild);
		}
	}
function selectAnswer(e){
	const selectedBtn=e.target;
	const isCorrect= selectedBtn.dataset.correct ==="true";
	if (isCorrect){
		selectedBtn.classList.add("correct");
		score++;
	}
	else{
		selectedBtn.classList.add("incorrect");
	}
	Array.from(answerButton.children).forEach(button => {
		if (button.dataset.correct ==="true" ) {
			button.classList.add("correct");
			
		}
		button.disabled=true;
		
	});
	nextButton.style.display="block";
}
function showScore(){
	resetState();
questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;nElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
nextButton.innerHTML="Play Again";
nextButton.style.display="block";
	
	
}
function handleNextButton(){
	currentQuestionIndex++;
	if(currentQuestionIndex<questions.length){
		showQuestion();
	}else{
		showScore();
	}
}
nextButton.addEventListener("click",()=>{
	if (currentQuestionIndex<questions.length){
		handleNextButton();
	}else{
	startQuiz();}
	
});
    startQuiz();