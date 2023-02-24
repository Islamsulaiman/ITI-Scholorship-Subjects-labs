let audio = document.getElementById("audio");

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let shuffle = document.getElementById("shuffle");
let repeat = document.getElementById("repeat");

let song1 = document.getElementById("s1");
let song2 = document.getElementById("s2");
let song3 = document.getElementById("s3");
let song4 = document.getElementById("s4");

//2) event listeners
let musicArr = [
  "./music/m1.mp4",
  "./music/m2.mp4",
  "./music/m3.mp4",
  "./music/m4.mp4",
];
play.addEventListener("click", () => {
  audio.play();
});

pause.addEventListener("click", () => {
  audio.pause();
});

repeat.addEventListener("click", () => {
  audio.load();
  audio.play();
});

//return random number based on array length
function randomNum(array) {
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

shuffle.addEventListener("click", function (e) {
  audio.src = `${randomNum(musicArr)}`;
  audio.play();
});

song1.addEventListener("click", () => {
  audio.src = `${musicArr[0]}`;
  audio.play();
});

song2.addEventListener("click", () => {
  audio.src = `${musicArr[1]}`;
  audio.play();
});

song3.addEventListener("click", () => {
  audio.src = `${musicArr[2]}`;
  audio.play();
});

song4.addEventListener("click", () => {
  audio.src = `${musicArr[3]}`;
  audio.play();
});
