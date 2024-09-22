const PLAY = document.getElementById("play-pause");

PLAY.addEventListener("click", () => {
  if ((PLAY.innerText = "Pause")) {
    PLAY.innerText = "Play";
  } else {
    PLAY.innerText = "Pause";
  }
});
