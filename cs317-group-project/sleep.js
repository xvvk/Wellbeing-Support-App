'use strict';



let rainSong = document.getElementById("rain");
// let rainButton = document.getElementById("rainButton");

let beachSong = document.getElementById("beach");
// let beachButton = document.getElementById("beachButton");

let thunderSong = document.getElementById("thunder");

function playPauseRain() {
    if (rainSong.paused) {
        rainSong.play();
        beachSong.pause();
        thunderSong.pause();
        // rainButton.innerHTML = "Pause";
        // beachButton.innerHTML = "Play";
    } else {
        rainSong.pause();
        // rainButton.innerHTML = "Play";
    }
}



function playPauseBeach() {
    if (beachSong.paused) {
        beachSong.play();
        rainSong.pause();
        thunderSong.pause();
        // beachButton.innerHTML = "Pause";
    } else {
        beachSong.pause();
        // beachButton.innerHTML = "Play";
    }
}



function playPauseThunder() {
    if (thunderSong.paused) {
        thunderSong.play();
        beachSong.pause();
        rainSong.pause();
        // rainButton.innerHTML = "Pause";
        // beachButton.innerHTML = "Play";
    } else {
        thunderSong.pause();
        // rainButton.innerHTML = "Play";
    }
}

//sleep sounds were taken from https://orangefreesounds.com/sound-effects/nature-sounds/
