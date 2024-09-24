const PLAY = document.getElementById("play-pause");
const AUDIO = document.getElementById("music");
const NEXT = document.getElementById("next");
const PREVIOUS = document.getElementById("previous");
const SONGS = ["./assets/audio/beyonce.mp3", "./assets/audio/dontstartnow.mp3"];
const SINGER = document.querySelector(".singer");
const TITLE = document.querySelector(".title");
const COVER = document.querySelector(".cover");
const BACK = document.querySelector("body");

let isPlay = false;
let i = 0;

// Change the button Play -> Pause -> Play
changeButton = () => {
  if (!isPlay) {
    PLAY.classList.remove("play-btn");
    PLAY.classList.add("pause-btn");
  } else {
    PLAY.classList.remove("pause-btn");
    PLAY.classList.add("play-btn");
  }
};

// Change the singer name and song title
changeDescription = (x) => {
  if (x == 1) {
    SINGER.innerHTML = "Dua Lipa";
    TITLE.innerHTML = "Don't Start Now";
  } else {
    SINGER.innerHTML = "Beyonce";
    TITLE.innerHTML = "Don't Hurt Yourself";
  }
};

// Change images that correspond to the song
changeCover = () => {
  COVER.classList.toggle("img-beyonce");
  BACK.classList.toggle("blur-beyonce");
  COVER.classList.toggle("img-duaLipa");
  BACK.classList.toggle("blur-duaLipa");
};

// Start and pause the song
PLAY.addEventListener("click", () => {
  console.log("clicked");
  if (!isPlay) {
    changeButton();
    AUDIO.src = SONGS[i];
    AUDIO.play();
    isPlay = true;
    console.log(isPlay);
  } else {
    changeButton();
    AUDIO.pause();
    isPlay = false;
  }
});

// Play the next song
NEXT.addEventListener("click", () => {
  AUDIO.pause();
  isPlay = false;
  if (i < SONGS.length - 1) {
    i++;
  } else {
    i = 0;
  }
  AUDIO.src = SONGS[i];
  changeDescription(i);
  changeCover();
  console.log("i = ", i);
  changeButton();
  AUDIO.play();
  isPlay = true;
});

// Play the previous song
PREVIOUS.addEventListener("click", () => {
  AUDIO.pause();
  isPlay = false;
  if (i - 1 >= 0) {
    --i;
  } else {
    i = SONGS.length - 1;
  }
  AUDIO.src = SONGS[i];
  changeDescription(i);
  changeCover();
  changeButton();
  console.log("i = ", i);
  AUDIO.play();
  isPlay = true;
});
