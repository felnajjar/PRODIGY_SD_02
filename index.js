const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
var computerNum = parseInt(Math.random() * 100);
var userNum;
function getNumber() {
    readline.question(`[Enter the number you want to guess] `, ans => {
        userNum = parseInt(ans);
        if (userNum > computerNum) {
            console.log(`-> Go smaller `);
            getNumber();
        }
        else if (userNum < computerNum) {
            console.log(`-> Go higher `);
            getNumber();
        }
        else {
            console.log(`-> The answer you guessed is correct :) `);
            readline.close();
        }
    });   
}
getNumber()