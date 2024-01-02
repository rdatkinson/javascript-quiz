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

// Display current question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-title").textContent = currentQuestion.title;
  
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = ''; // Clear previous choices
  
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.classList.add('choice-button');
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice));
        choicesContainer.appendChild(button);
    });
  }

// Check answer
function checkAnswer(answer) {
    let feedbackEl = document.getElementById('feedback');

    if (answer === questions[currentQuestionIndex].answer) {
        // Correct answer
        feedbackEl.textContent = "Correct!";
        feedbackEl.classList.add('correct');
      } else {
        // Incorrect answer
        feedbackEl.textContent = "Wrong!";
        feedbackEl.classList.add('incorrect');
        time -= 10; // Penalize time for incorrect answer
      }

  // Show feedback for a short duration
  feedbackEl.classList.remove('hide');
  setTimeout(() => {
    feedbackEl.classList.add('hide');
    feedbackEl.classList.remove('correct', 'incorrect');

// Move to next question or end quiz
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  }, 1000); // Adjust the timing as needed
}

    // if (answer !== questions[currentQuestionIndex].answer) {
    //   // Penalize time
    //   time -= 10;
    // }
  
    // currentQuestionIndex++;
    // if (currentQuestionIndex === questions.length) {
    //   endQuiz();
    // } else {
    //   displayQuestion();
    // }
  }

// Timer tick
function clockTick() {
    time--;
    document.getElementById("time").textContent = time;
    if (time <= 0) {
      endQuiz();
    }
  }

// End quiz
function endQuiz() {
    clearInterval(timerId);
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    document.getElementById("final-score").textContent = time;
  }

// Save high score
function saveHighscore() {
    const initials = document.getElementById("initials").value;
    if (initials !== "") {
      const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
      const newScore = { score: time, initials: initials };
      highscores.push(newScore);
      localStorage.setItem("highscores", JSON.stringify(highscores));
    }
  }

  // Event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', startQuiz);
  
    document.getElementById('submit').addEventListener('click', function(event) {
      event.preventDefault();
      saveHighscore();
    });
  });
  