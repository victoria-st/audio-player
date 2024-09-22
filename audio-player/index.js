const PLAY = document.getElementById("play-pause");
const AUDIO = document.getElementById("music");

let isPlay = false;

PLAY.addEventListener("click", () => {
  console.log("clicked");
  if (PLAY.innerText == "Play") {
    PLAY.innerText = "Pause";
  } else {
    PLAY.innerText = "Play";
  }
  playAudio();
});

playAudio = () => {
  if (!isPlay) {
    AUDIO.play();
    isPlay = true;
  } else {
    AUDIO.pause();
    isPlay = false;
  }
};
