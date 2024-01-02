function saveHighscore() {
    const initials = document.getElementById("initials").value;
    if (initials !== "") {
      const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
      const newScore = { score: time, initials };
      highscores.push(newScore);
      localStorage.setItem("highscores", JSON.stringify(highscores));
    }
  }