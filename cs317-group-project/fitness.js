'use strict';


window.onload = function () {
    let challengeOne = localStorage.getItem('complete') === null ? localStorage.setItem('complete', null) : localStorage.getItem('complete');
    let checkBoxOne = document.getElementsByName('complete');
    checkBoxOne.forEach(element => {
        if (element.value === challengeOne) {
            element.checked = true;
            document.getElementById("challengeOneHeader").innerHTML = "Challenge 1: &#9989";
            document.getElementById("challengeOne").innerHTML = "Challenge complete!";
            document.getElementById("challengeOneCB").innerHTML = "Well done!!";
        }
    });

    let challengeTwo = localStorage.getItem('complete2') === null ? localStorage.setItem('complete2', null) : localStorage.getItem('complete2');
    let checkBoxTwo = document.getElementsByName('complete2');
    checkBoxTwo.forEach(element => {
        if (element.value === challengeTwo) {
            element.checked = true;
            document.getElementById("challengeTwoHeader").innerHTML = "Challenge 2: &#9989";
            document.getElementById("challengeTwo").innerHTML = "Challenge complete!";
            document.getElementById("challengeTwoCB").innerHTML = "Well done!!";
        }
    });

    let challengeThree = localStorage.getItem('complete3') === null ? localStorage.setItem('complete3', null) : localStorage.getItem('complete3');
    let checkBoxThree = document.getElementsByName('complete3');
    checkBoxThree.forEach(element => {
        if (element.value === challengeThree) {
            element.checked = true;
            document.getElementById("challengeThreeHeader").innerHTML = "Challenge 3: &#9989";
            document.getElementById("challengeThree").innerHTML = "Challenge complete!";
            document.getElementById("challengeThreeCB").innerHTML = "Well done!!";
        }

    });


    let challengeFour = localStorage.getItem('complete4') === null ? localStorage.setItem('complete4', null) : localStorage.getItem('complete4');
    let checkBoxFour = document.getElementsByName('complete4');
    checkBoxFour.forEach(element => {
        if (element.value === challengeFour) {
            element.checked = true;
            document.getElementById("challengeFourHeader").innerHTML = "Challenge 4: &#9989";
            document.getElementById("challengeFour").innerHTML = "Challenge complete!";
            document.getElementById("challengeFourCB").innerHTML = "Well done!!";
        }
    });

    let challengeFive = localStorage.getItem('complete5') === null ? localStorage.setItem('complete5', null) : localStorage.getItem('complete5');
    let checkBoxFive = document.getElementsByName('complete5');
    checkBoxFive.forEach(element => {
        if (element.value === challengeFive) {
            element.checked = true;
            document.getElementById("challengeFiveHeader").innerHTML = "Challenge 5: &#9989";
            document.getElementById("challengeFive").innerHTML = "Challenge complete!";
            document.getElementById("challengeFiveCB").innerHTML = "Well done!!";
        }
    });


    let challengeSix = localStorage.getItem('complete6') === null ? localStorage.setItem('complete6', null) : localStorage.getItem('complete6');
    let checkBoxSix = document.getElementsByName('complete6');
    checkBoxSix.forEach(element => {
        if (element.value === challengeSix) {
            element.checked = true;
            document.getElementById("challengeSixHeader").innerHTML = "Challenge 6: &#9989";
            document.getElementById("challengeSix").innerHTML = "Challenge complete!";
            document.getElementById("challengeSixCB").innerHTML = "Well done!!";
        }
    });


    let challengeSeven = localStorage.getItem('complete7') === null ? localStorage.setItem('complete7', null) : localStorage.getItem('complete7');
    let checkBoxSeven = document.getElementsByName('complete7');
    checkBoxSeven.forEach(element => {
        if (element.value === challengeSeven) {
            element.checked = true;
            document.getElementById("challengeSevenHeader").innerHTML = "Challenge 7: &#9989";
            document.getElementById("challengeSeven").innerHTML = "Challenge complete!";
            document.getElementById("challengeSevenCB").innerHTML = "Well done!!";
        }
    });


    if (localStorage.getItem('complete3') === 'sprint' && localStorage.getItem('complete2') === "plank" && localStorage.getItem('complete') === "squat" && localStorage.getItem('complete4') === "skipping" && localStorage.getItem('complete5') === "burpees" && localStorage.getItem('complete6') === "situps" && localStorage.getItem('complete7') === "mountain") {
        alert("7 day fitness challenge complete! Come back again soon for more challenges.");
        document.getElementById("description").innerHTML = "Thanks for completing the 7 day fitness challenge! Come back soon for more challenges."
    }

};


function saveChallenge1(val) {
    localStorage.setItem('complete', val);

}


function saveChallenge2(val) {
    localStorage.setItem('complete2', val);
}


function saveChallenge3(val) {
    localStorage.setItem('complete3', val);
}


function saveChallenge4(val) {
    localStorage.setItem('complete4', val);
}


function saveChallenge5(val) {
    localStorage.setItem('complete5', val);
}


function saveChallenge6(val) {
    localStorage.setItem('complete6', val);
}


function saveChallenge7(val) {
    localStorage.setItem('complete7', val);
}


function challengeOneComplete() {

    if (document.getElementById("squat").checked) {
        document.getElementById("challengeOneHeader").innerHTML = "Challenge 1: &#9989";
        document.getElementById("challengeOne").innerHTML = "Challenge complete!";
        document.getElementById("challengeOneCB").innerHTML = "Well done!!";
    } else if (document.getElementById("squat").checked === false) {
        document.getElementById("challengeOne").innerHTML = "Squats: Try to do 50 squats today. Depending on your fitness levels you can do them all at once or spread them throughout the day";
        document.getElementById("challengeOneHeader").innerHTML = "Challenge 1";
    }
}


function challengeTwoComplete() {
    if (document.getElementById("plank").checked) {
        document.getElementById("challengeTwoHeader").innerHTML = "Challenge 2: &#9989;";
        document.getElementById("challengeTwo").innerHTML = "Challenge complete!";
        document.getElementById("challengeTwoCB").innerHTML = "Well done!!";
    } else if (document.getElementById("plank").checked === false) {
        document.getElementById("challengeTwo").innerHTML = "Plank: depending on your fitness levels try to hold a plank between 10-60 seconds!";
        document.getElementById("challengeTwoHeader").innerHTML = "Challenge 2";
    }
}


function challengeThreeComplete() {
    if (document.getElementById("sprint").checked) {
        document.getElementById("challengeThreeHeader").innerHTML = "Challenge 3: &#9989;";
        document.getElementById("challengeThree").innerHTML = "Challenge complete!";
        document.getElementById("challengeThreeCB").innerHTML = "Well done!!";
    } else if (document.getElementById("sprint").checked === false) {
        document.getElementById("challengeThree").innerHTML = "Sprints: Try to sprint as fast as you can for 30 seconds! Slow down the pace for another 30 seconds then begin to sprint as fast as you can again to get the heart rate back up. Repeat this as many times as you can!";
        document.getElementById("challengeThreeHeader").innerHTML = "Challenge 3";
    }
}


function challengeFourComplete() {
    if (document.getElementById("skipping").checked) {
        document.getElementById("challengeFourHeader").innerHTML = "Challenge 4: &#9989;";
        document.getElementById("challengeFour").innerHTML = "Challenge complete!";
        document.getElementById("challengeFourCB").innerHTML = "Well done!!";
    } else if (document.getElementById("skipping").checked === false) {
        document.getElementById("challengeFour").innerHTML = "Skipping: Try to skip for two minutes straight using a skipping rope! If you need a break don't worry this is more challenging that i sounds!";
        document.getElementById("challengeFourHeader").innerHTML = "Challenge 4";
    }
}


function challengeFiveComplete() {
    if (document.getElementById("burpees").checked) {
        document.getElementById("challengeFiveHeader").innerHTML = "Challenge 5: &#9989;";
        document.getElementById("challengeFive").innerHTML = "Challenge complete!";
        document.getElementById("challengeFiveCB").innerHTML = "Well done!!";
    } else if (document.getElementById("burpees").checked === false) {
        document.getElementById("challengeFive").innerHTML = "Burpees: Try to do 50 burpees today. Depending on your fitness levels you can do them all at once or spread them throughout the day. But remember you'll burn more calories if you do them straight.";
        document.getElementById("challengeFiveHeader").innerHTML = "Challenge 5";
    }
}

function challengeSixComplete() {
    if (document.getElementById("situps").checked) {
        document.getElementById("challengeSixHeader").innerHTML = "Challenge 6: &#9989;";
        document.getElementById("challengeSix").innerHTML = "Challenge complete!";
        document.getElementById("challengeSixCB").innerHTML = "Well done!!";
    } else if (document.getElementById("situps").checked === false) {
        document.getElementById("challengeSix").innerHTML = "Sit-ups: Try to do 50 sit-ups! Depending on your fitness levels you can do them all at once or spread them throughout your day.";
        document.getElementById("challengeSixHeader").innerHTML = "Challenge 6";
    }
}


function challengeSevenComplete() {
    if (document.getElementById("mountain").checked) {
        document.getElementById("challengeSevenHeader").innerHTML = "Challenge 7: &#9989;";
        document.getElementById("challengeSeven").innerHTML = "Challenge complete!";
        document.getElementById("challengeSevenCB").innerHTML = "Well done!!";
    } else if (document.getElementById("mountain").checked === false) {
        document.getElementById("challengeSeven").innerHTML = "Sit-ups: Try to do 50 sit-ups! Depending on your fitness levels you can do them all at once or spread them throughout your day.";
        document.getElementById("challengeSevenHeader").innerHTML = "Challenge 7";
    }
}


function allDone() {
    if (localStorage.getItem('complete3') === 'sprint' && localStorage.getItem('complete2') === "plank" && localStorage.getItem('complete') === "squat" && localStorage.getItem('complete4') === "skipping" && localStorage.getItem('complete5') === "burpees" && localStorage.getItem('complete6') === "situps" && localStorage.getItem('complete7') === "mountain") {
        alert("7 day fitness challenge complete! Come back again soon for more challenges.");
        document.getElementById("description").innerHTML = "Thanks for completing the 7 day fitness challenge! Come back soon for more challenges."
    }
}



// all media used for the fitness page was taken from open source images https://unsplash.com/s/photos/open-source-fitness-cartoon
