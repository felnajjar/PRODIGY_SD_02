var computerNum = parseInt(Math.random() * 100);
var userNum;
var tries = 0;
function getNumber(form) {
    tries++;
    userNum = parseInt(form.number.value);
    if (userNum > computerNum) {
        document.getElementById("result").innerHTML = `Go smaller! (${tries} tries)`;
    }
    else if (userNum < computerNum) {
        document.getElementById("result").innerHTML = `Go higher! (${tries} tries)`;
    }
    else {
        document.getElementById("result").innerHTML = `The answer you guessed is correct (${tries} tries)`;
    }
}