'use strict';



let breathingSpace = document.getElementById("breathing");

let mountainMeditation = document.getElementById("mountain");

let bodyScan = document.getElementById("scan");

function playPauseBreathing() {
    if (breathingSpace.paused) {
        breathingSpace.play();
        mountainMeditation.pause();
        bodyScan.pause();
    } else {
        breathingSpace.pause();
    }
}

function playPauseMountain() {
    if (mountainMeditation.paused) {
        mountainMeditation.play();
        breathingSpace.pause();
        bodyScan.pause();
    } else {
        mountainMeditation.pause();
    }
}

function playPauseScan() {
    if (bodyScan.paused) {
        bodyScan.play();
        breathingSpace.pause();
        mountainMeditation.pause();
    } else {
        bodyScan.pause();
    }
}