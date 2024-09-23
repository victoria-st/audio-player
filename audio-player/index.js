const PLAY = document.getElementById("play-pause");
const AUDIO = document.getElementById("music");
const NEXT = document.getElementById("next");
const PREVIOUS = document.getElementById("previous");
const SONGS = ["./assets/audio/beyonce.mp3", "./assets/audio/dontstartnow.mp3"];
const SINGER = document.querySelector(".singer");
const TITLE = document.querySelector(".title");
const COVER = document.querySelector(".cover");
const BACK = document.querySelector("body");

// Existing code unchanged.
// window.onload = function () {
//   var context = new AudioContext();
//   // Setup all nodes
//   // ...
// };

// // One-liner to resume playback when user interacted with the page.
// PLAY.addEventListener("click", function () {
//   context.resume().then(() => {
//     console.log("Playback resumed successfully");
//   });
// });

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

changeDescription = (x) => {
  if (x == 1) {
    SINGER.innerHTML = "Dua Lipa";
    TITLE.innerHTML = "Don't Start Now";
  } else {
    SINGER.innerHTML = "Beyonce";
    TITLE.innerHTML = "Don't Hurt Yourself";
  }
};

changeCover = () => {
  COVER.classList.toggle("img-beyonce");
  BACK.classList.toggle("blur-beyonce");
  COVER.classList.toggle("img-duaLipa");
  BACK.classList.toggle("blur-duaLipa");
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
  changeDescription(i);
  changeCover();
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
  changeDescription(i);
  changeCover();
  console.log("i = ", i);
  AUDIO.play();
  isPlay = true;
});
