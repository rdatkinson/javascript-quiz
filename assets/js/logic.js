// Global variables
let currentQuestionIndex = 0;
let time = questions.length * 15; // 15 seconds per question
let timerId;

// Start quiz function
function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
  
    timerId = setInterval(clockTick, 1000);
  
    displayQuestion();
  }