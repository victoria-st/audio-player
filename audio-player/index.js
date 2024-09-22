const PLAY = document.getElementById("play-pause");
const AUDIO = document.getElementById("music");
const NEXT = document.getElementById("next");
const PREVIOUS = document.getElementById("previous");
const SONGS = ["./assets/audio/beyonce.mp3", "./assets/audio/dontstartnow.mp3"];

let isPlay = false;
let i = 0;

playAudio = () => {
  AUDIO.src = SONGS[i];
  if (!isPlay) {
    PLAY.classList.toggle("play-btn");
    PLAY.classList.toggle("pause-btn");
    AUDIO.play();
    isPlay = true;
  } else {
    PLAY.classList.toggle("pause-btn");
    PLAY.classList.toggle("play-btn");
    AUDIO.pause();
    isPlay = false;
  }
};

PLAY.addEventListener("click", playAudio());

NEXT.addEventListener("click", () => {
  AUDIO.pause();
  if (i < SONGS.length - 1) {
    i++;
  } else {
    i = 0;
  }
  AUDIO.src = SONGS[i];
  console.log("i = ", i);
  AUDIO.play();
  isPlay = true;
});

PREVIOUS.addEventListener("click", () => {
  AUDIO.pause();
  if (i - 1 >= 0) {
    --i;
  } else {
    i = SONGS.length - 1;
  }
  AUDIO.src = SONGS[i];
  console.log("i = ", i);
  AUDIO.play();
  isPlay = true;
});
