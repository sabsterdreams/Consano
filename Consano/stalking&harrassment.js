   const questions = [
      {
        question: " Your friend keeps messaging you even though you told them to stop. Is this harassment? ",
        answers: [
          { text: "Yes", correct: true, extra: "Correct, the behaviour is unwanted and repetitive so is harassment."},
          { text: "No", correct: false,extra:"The behaviour is unwanted and repetitive so is harassment." }
   
        ]
      },
      {
           question: " A stranger stopped you in the street and gave you a compliment. Is this harassment?",
        answers: [
          { text: "Yes", correct:false,extra:"This is a one off event so doesn't count as harrassment. " },
          { text: "No", correct: true, extra:"Correct, this is a one off event so doesn't count as harrassment."}
   
        ]
      },
      {
        question: "Your friend keeps sending you gifts even though you cut them off. Is this stalking? ",
        answers: [
          { text: "Yes", correct: true,extra:"Correct,cutting someone off indicates you don't want them to contact you, so this is stalking as it's also repetitive." },
          { text: "No", correct: false, extra:"Cutting someone off indicates you don't want them to contact you, so this is stalking as it's also repetitive." }
         
        ]
      },
      {
        question: "A random classmate keeps turning up outside your classroom everyday to see you even though they don't have a lesson there. Is this stalking? ",
        answers: [
           { text: "Yes", correct: true, extra: "Correct-This is obsessive and fixated behaviour considering they aren't your friend."  },
          { text: "No", correct: false,extra:"This is obsessive and fixated behaviour considering they aren't your friend."  }
         
        ]
      },
      {
        question: "Someone interrupts you in a group meeting and you start to feel annoyed. Is this harassment?",
        answers: [
          { text: "Yes", correct:false,extra:"Whilst this is annoying, it's a one off event."  },
          { text: "No", correct: true, extra: "Correct, whilst this is annoying, it's a one off event. "}
        
        ]
      },
	  {
        question: "An ex-friend keeps tagging you in their social media posts even though you aren't in them. Is this harassment?",
        answers: [
           { text: "Yes", correct: true, extra: "Correct- This is an ex-friend who shouldn't have anything to do with you, the behaviour is unwanted and intrusive.  "  },
          { text: "No", correct: false , extra: "Correct- This is an ex-friend who shouldn't have anything to do with you, the behaviour is unwanted and intrusive.  " }
         
        ]
      },
	  
	  
	  {
        question: "A stranger requests to follow you on social media once. Is this stalking?",
        answers: [
           { text: "Yes", correct: false, extra: "While this can be strange, it's not stalking until the behaviour escalates to be fixated obsessive unwanted and repetitive."  },
          { text: "No", correct: true, extra: "Correct- While this can be strange, it's not stalking until the behaviour escalates to be fixated obsessive unwanted and repetitive.  "  }
         
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