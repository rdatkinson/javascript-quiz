function saveHighscore() {
    const initials = document.getElementById("initials").value;
    if (initials !== "") {
      const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
      const newScore = { score: time, initials };
      highscores.push(newScore);
      localStorage.setItem("highscores", JSON.stringify(highscores));
    }
  }
  
  function loadHighscores() {
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    // Display these scores on the highscores page
  }
  
  function clearHighscores() {
    localStorage.removeItem("highscores");
    // Update the display
  }
  