 const questions = [
      {
        question: "Max telling people that Phoebe's mum has passed away.",
        answers: [
          { text: "Healthy", correct: false,extra:"This is very personal and sensitive information." },
          { text: "Unhealthy", correct: true,extra:"Correct- This is very personal and sensitive information." },
         
        ]
      },
      {
        question: "Nell ignores Greta's text saying she's upset with her behaviour and instead shows the rest of the friendship group, saying how petty Greta is. ",
        answers: [
          { text: "Healthy", correct: false,extra:"Nell should have sorted the issue out with Greta instead of spreading rumours. This is immature and calculated behaviour." },
          { text: "Unhealthy", correct: true,extra:"Correct- Nell should have sorted the issue out with Greta instead of spreading rumours. This is immature and calculated behaviour." },
        
        ]
      },
      {
        question: "Mia telling the class that Francesca won an iceskating competition. ",
        answers: [
           { text: "Healthy", correct: true, extra:"Correct- this is celebrating someone else's success and a kind thing to do."},
          { text: "Unhealthy", correct: false,extra:"This is celebrating someone else's success and a kind thing to do." },
        ]
      },
      {
        question: "Wendy telling her friends how much she likes her crush. ",
        answers: [
          { text: "Healthy", correct: true,extra:"Correct- this is positive and also not with negative intention." },
          { text: "Unhealthy", correct: false ,extra:"This is positive and also not with negative intention."},
         
        ]
      },
      {
        question: "Julie only talking about her ex-friend in every conversation.",
        answers: [
         { text: "Healthy", correct: false,extra:"This is excessive if in every conversation." },
          { text: "Unhealthy", correct: true,extra:"Correct- this is excessive if in every conversation." },
         
        ]
      }   ,
	  
	  {
        question: "Quinta spreading a rumour that Henry had stolen something from the shops",
        answers: [
         { text: "Healthy", correct: false, extra:"This is a form of smear campaign and is manipulative behaviour." },
          { text: "Unhealthy", correct: true, extra: "Correct-This is a form of smear campaign and is manipulative behaviour. "},
         
        ]
      }
    ];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const commentElement= document.getElementById("comment");


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
		button.dataset.extra=answer.extra;
		if (answer.correct){
			button.dataset.correct=answer.correct;
		}
		button.addEventListener("click",selectAnswer);
      });
	
    }
	
	function resetState(){
		nextButton.style.display="none";
		commentElement.style.display="none";
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
	commentElement.innerHTML = selectedBtn.dataset.extra;
	commentElement.style.display="block";
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