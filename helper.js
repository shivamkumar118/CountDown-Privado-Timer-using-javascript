const counter = document.querySelector('.counter');
const btn = document.querySelector('.buttons');

const secondsInput = 300
var seconds;
var minutes_val;
var remainder;
var toCount;


function display(first, second, third) {
    document.getElementById(first).style.display = "none";
    document.getElementById(second).style.display = "block";
    document.getElementById(third).style.display = "none";
}

function check(targetted_btn) {
    toCount = targetted_btn.value;
    if (targetted_btn.id == "start") {
        display("start", "stop", "continue");
        seconds = Number(secondsInput);
        counting();

    }
    else if (targetted_btn.id == "stop") {
        display("stop", "continue", "start");
    }
    else {
        display('continue', "stop", "start");
    }
}

function count() {
    if (seconds > 0) {
        if (toCount == true) {
            seconds--;
            remainder = seconds % 60;
            minutes_val = Math.floor(seconds / 60);

            if (remainder < 10) {
                remainder = "0" + remainder;
            }

            if (minutes_val < 10) {
                minutes_val = "0" + minutes_val;
            }

            counter.innerHTML = minutes_val + " : " + remainder;
        }
    }
    else {
        counter.innerHTML = "00:00";
        counter.style.color = 'red';
        document.getElementById("start").style.display = "none";
        document.getElementById("stop").style.display = "none";
        val = document.getElementById("continue");
        val.style.display = "block";
        val.innerHTML = "Reset";
        document.getElementById("continue").addEventListener('click',function(e){
            location.reload();
        })


    }
}

function counting() {
    remainder = seconds % 60;
    minutes_val = Math.floor(seconds / 60);

    if (remainder < 10) {
        remainder = "0" + remainder;
    }

    if (minutes_val < 10) {
        minutes_val = "0" + minutes_val;
    }

    counter.innerHTML = minutes_val + " : " + remainder;
    setInterval(count, 1000);
}