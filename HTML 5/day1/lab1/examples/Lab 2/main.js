const audioPlayer = document.querySelector(".audioPlayer") ;
const playBtn = document.querySelector(".play");
const repeatBtn = document.querySelector(".repeat");
const shufleBtn = document.querySelector(".shufle");
const puaseBtn = document.querySelector(".puase");
const songs = document.querySelector(".songs");
const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");

var paths = ["./sounds/sound1.mp3","./sounds/sound2.mp3", "./sounds/sound3.mp3", "./sounds/sound4.mp3"];

playBtn.addEventListener("click", function(e){
    audioPlayer.play();
});

puaseBtn.addEventListener("click", function(e){
  
    audioPlayer.pause();
});
repeatBtn.addEventListener("click", function(e){
    audioPlayer.currentTime = 0;
    audioPlayer.play();
});


s1.addEventListener("click", function(e){
    audioPlayer.src = `${paths[1]}`;
    audioPlayer.play();
});
s2.addEventListener("click", function(e){
    audioPlayer.src = `${paths[2]}`;
    audioPlayer.play();
});

s3.addEventListener("click", function(e){
    audioPlayer.src = `${paths[3]}`;
    audioPlayer.play();
    
});


shufleBtn.addEventListener("click", function(e){
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    audioPlayer.src = `${paths[getRandomInt(3)]}`;
    audioPlayer.play();
});
audioPlayer.addEventListener("ended", function(e){

    for(i=0;i<4;i++){
        e.target.src= `${paths[i]}`;
        e.target.play();
    }
});