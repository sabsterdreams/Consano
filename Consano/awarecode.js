    const questions = [
      {
        question: "Who is being bossy and rude?",
        answers: [
          { text: "Maria", correct: false, extra: "Maria has not actually exhibited any bossy or rude behaviour."},
          { text: "Justine", correct: true,extra: "Correct- Justine is using her own qualities to describe Maria" },
          { text: "Neither", correct: false,extra: "Justine is treating Maria very poorly." },
          { text: "Both", correct: false,extra: "Only Justine is being bossy and rude. " }
        ]
      },
      {
        question: "What emotion may Justine be feeling that has led her to say this after seeing Maria upset?",
        answers: [
          { text: "Relief", correct: false,extra: "Justine is feeling guilty for treating Maria so poorly but is projecting this guilt onto her because she doesn't know how to deal with this emotion. " },
          { text: "Disgust", correct: false ,extra: "Justine is feeling guilty for treating Maria so poorly but is projecting this guilt onto her because she doesn't know how to deal with this emotion. "},
          { text: "Sadness", correct: false,extra: "Justine is feeling guilty for treating Maria so poorly but is projecting this guilt onto her because she doesn't know how to deal with this emotion. " },
          { text: "Guilt", correct: true,extra: "Correct- Justine is feeling guilty for treating Maria so poorly but is projecting this guilt onto her because she doesn't know how to deal with this emotion. " }
        ]
      },
      {
        question: "How could we describe Justine's confidence?",
        answers: [
          { text: "Justine is trying to build up her confidence", correct: false ,extra: "You can't build up your confidence by putting down others. "},
          { text: "Justine is treating Maria the right way", correct: false ,extra: "Justine is not treating Maria right."},
          { text: "Justine has real confidence in herself", correct: false,extra: "If Justine was truly confident she wouldn't feel any need to put down Maria." },
          { text: "Justine is insecure about her own abilities", correct: true,extra: "Correct- If Justine was truly confident in herself she wouldn't be so critical of Maria. " }
        ]
      },
      {
        question: "Who is projecting?",
        answers: [
          { text: "Maria", correct: false ,extra: "Only Justine is projecting. Maria is the victim of projection from Justine."},
          { text: "Justine", correct: true ,extra: "Correct- Only Justine is projecting. Maria is the victim of projection from Justine."},
          { text: "Neither", correct: false,extra: "Justine is projecting. Maria is the victim of projection from Justine." },
          { text: "Both", correct: false,extra: "Only Justine is projecting. Maria is the victim of projection from Justine. " }
        ]
      },
      {
        question: "How may Maria feel when she is shouted at for small mistakes?",
        answers: [
          { text: "Shame", correct: true,extra: "A mix of all of these emotions is possible. Maria could feel shame if she interalises the way Justine is treating her. " },
          { text: "Confused", correct: true ,extra: "A mix of all of these emotions is possible. Maria could feel confused as to why Justine is reacting so over the top. "},
          { text: "Embarrassed", correct: true ,extra: "A mix of all of these emotions is possible. Maria could feel embarrassed as other people may see her being shouted at. "},
          { text: "A mix of all of them", correct: true ,extra: "Correct- Projection can cause a wide range of negative emotions in the other person. "}
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