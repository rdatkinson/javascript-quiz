function saveHighscore() {
    const initials = document.getElementById("initials").value;
    if (initials !== "") {
      const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
      const newScore = { score: time, initials };
      highscores.push(newScore);
      localStorage.setItem("highscores", JSON.stringify(highscores));
    }
  }
  
// Function to load highscores from local storage and display them
function loadHighscores() {
    const highscoresList = document.getElementById("highscores");
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    highscoresList.innerHTML = ''; // Clear the existing list

    // Create a list item for each highscore and append it to the highscores list
    highscores.forEach(score => {
        const li = document.createElement('li');
        li.textContent = `${score.initials} - ${score.score}`;
        highscoresList.appendChild(li);
    });
}
  
// Function to clear highscores from local storage and the display
function clearHighscores() {
    localStorage.removeItem("highscores"); // Remove highscores from local storage
    loadHighscores(); // Refresh the list display
}

  document.getElementById('clear').addEventListener('click', () => {
    localStorage.removeItem("highscores");
    loadHighscores(); // Refresh the list display
});