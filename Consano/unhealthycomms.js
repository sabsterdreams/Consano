   const questions = [
      {
        question: "What is the main type of communication are the girls expressing to Ying? ",
        answers: [
          { text: "Aggressive", correct: false,extra:"Whilst the girls behaviour is still very bad, it is not directly agressive."},
          { text: "Passive Aggressive", correct: true,extra:"Correct- the girls are hiding their true intentions under the surface of their actions." },
          { text: "Healthy Communication", correct: false,extra:"The girls are behaving very inappropriately." },
          { text: "None of the above", correct: false,extra:"The girls are being passive agressive to Ying. " }
        ]
      },
      {
        question: "Why may the girls be choosing to interact with Ying in this way?",
        answers: [
          { text: "They are just joking they don't mean any harm", correct: false,extra:"Judging by how repetitive and targeted the behaviour is, it is unlikely to be 'just a joke'." },
          { text: "They aren't rude so if they aren't directly mean to Ying it means they aren't mean", correct: false ,extra:"Just because behaviour isn't directly agressive, doesn't mean it's not mean."},
          { text: "They are too scared to show how they really feel because they know deep down it's rude", correct: true ,extra:"Correct- the girls are acting in a manipulative way to try to get away with treating Ying poorly."},
          { text: "Ying is difficult to talk to so there is no choice", correct: false ,extra:"This is vicitm blaming Ying as people don't deserve to be treated like this."}
        ]
      },
      {
        question: "How may Ying feel based on her account?",
        answers: [
          { text: "Ying is ignoring the behaviour", correct: false,extra:"Since Ying has written so much detail, it is unlikely that she is ignoring the behaviour. " },
          { text: "Ying doesn't mind the behaviour as it's not directly agressive", correct: false,extra:"Just because behaviour isn't directly agressive doesn't mean it won't hurt." },
          { text: "Ying feels hurt and excluded from the behaviour even if it's passive agressive", correct: true ,extra:"Correct- this behaviour from 'friend's would make most people feel upset."},
          { text: "Ying is feeling angry", correct: false,extra:"Judging by Ying's account, she seems more hurt than angry. " }
        ]
      },
      {
        question: "Why does Ying feel like it's hard to report the behaviour?",
        answers: [
          { text: "Passive Aggressive behaviour is hard to get evidence for", correct: true ,extra:"All of these points can be true. It is easier to show evidence of physical abuse over emotional abuse. "},
          { text: " She feels like no one understands her pain because it's not spoken about", correct: true,extra:"All of these points can be true. Passive Agressive behaviour is often left out of most antibullying discussions." },
          { text: "She is too shy ", correct: true,extra:"All of these points could be true. It can be difficult to report things as there can be many worries holding people back. "},
          { text: "It could be all of these", correct: true,extra:"Correct! There are many reasons why it can be hard to speak up. "}
        ]
      },
      {
        question: "How should Ying approach this situation to deescalate it?",
        answers: [
          { text: "Do nothing", correct: false,extra:"If Ying does nothing she will continue to feel hurt and the behaviour will keep going. " },
          { text: " Start shouting at the girls ", correct: false,extra:"There is such thing as reactive abuse, where passive agressive behaviour is used to incite someone's reaction." },
          { text: " Talk to a teacher about it for support and distance herself from the group", correct: true,extra:"The support is necessary for Ying to start to feel more confident and distancing herself ensures she doesn't have to keep dealing with the behaviour." },
          { text: "Be passive aggressive back", correct: false,extra:"This will likely makes things even more tense between the girls. "}
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