const PLAY = document.getElementById("play-pause");
// const AUDIO = document.getElementById("music");
const NEXT = document.getElementById("next");
const PREVIOUS = document.getElementById("previous");
const SONGS = ["./assets/audio/beyonce.mp3", "./assets/audio/dontstartnow.mp3"];
const SINGER = document.querySelector(".singer");
const TITLE = document.querySelector(".title");
const COVER = document.querySelector(".cover");
const BACK = document.querySelector("body");
const LENGTH = document.querySelector('.length');

// const audioPlayer = document.querySelector(".audio-player");
const AUDIO = new Audio("./assets/audio/beyonce.mp3");

let isPlay = false;
let i = 0;

// const audioElement = new Audio('./assets/audio/beyonce.mp3');
AUDIO.addEventListener("loadeddata", () => {
  let duration = AUDIO.duration;
  LENGTH.textContent = getSongLength(AUDIO.duration);
  console.log(duration, "duration", typeof(duration), parseInt(duration));
  // The duration variable now holds the duration (in seconds) of the audio clip
  
});


//turn 128 seconds into 2:08
function getSongLength(numberSeconds) {
  let seconds = parseInt(numberSeconds);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  console.log(`${minutes}:${String(seconds).padStart(2, 0)}`);
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
  console.log("clicked");
  if (!isPlay) {
    changeButton();
    // AUDIO.src = SONGS[i];
    AUDIO.play();
    isPlay = true;

    console.log(AUDIO.duration, "initial duration");
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

// TEST CODE
// AUDIO.addEventListener("durationchange", () => {
//   var x = AUDIO.duration;
//   console.log(x, "after update duration");
// });



// AUDIO.addEventListener("timeupdate", () => {
//   // Sets the percentage
//   timePlayed = `${Math.floor((AUDIO.currentTime / AUDIO.duration) * 100)}%`;
//   console.log(timePlayed, "9");
// });
