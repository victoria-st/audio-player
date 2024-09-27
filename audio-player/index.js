const PLAY = document.getElementById("play-pause");
const NEXT = document.getElementById("next");
const PREVIOUS = document.getElementById("previous");
const SONGS = ["./assets/audio/beyonce.mp3", "./assets/audio/dontstartnow.mp3"];
const SINGER = document.querySelector(".singer");
const TITLE = document.querySelector(".title");
const COVER = document.querySelector(".cover");
const BACK = document.querySelector("body");
const LENGTH = document.querySelector('.length');
const TIME = document.querySelector('.current-time');
const SLIDER = document.querySelector('.slider');
const PROGRESS = document.querySelector('.progress');


let isPlay = false;
let i = 0;

const AUDIO = new Audio("./assets/audio/beyonce.mp3");

AUDIO.addEventListener("durationchange", () => {
  let duration = AUDIO.duration;
  LENGTH.textContent = getTimeFromSecondsNumber(AUDIO.duration); 
});


// Determine time from the number of seconds
function getTimeFromSecondsNumber(secondsNumber) {
  let seconds = parseInt(secondsNumber);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  return `${minutes}:${String(seconds).padStart(2, 0)}`;
}


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
  if (!isPlay) {
    changeButton();
    AUDIO.play();
    isPlay = true;
  } else {
    changeButton();
    AUDIO.pause();
    isPlay = false;
  }
});

// Update current time
AUDIO.addEventListener("timeupdate", () => {
  TIME.textContent = getTimeFromSecondsNumber(AUDIO.currentTime);
  SLIDER.style.left = parseInt(AUDIO.currentTime / AUDIO.duration * 100) + '%';
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
  AUDIO.play();
  isPlay = true;
});

// Switch to a certain moment of the audio
PROGRESS.addEventListener('click', (event) => {
  let selectedTime = parseInt(event.offsetX / PROGRESS.offsetWidth * AUDIO.duration);
  AUDIO.currentTime = selectedTime
})




