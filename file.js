var randomNum = Math.floor(Math.random() * 10 + 1);

var numOfGuess = 3;
var numOfStars = 3;

function guessNumber() {

    var guessNum = document.getElementById("guessNum").value;

    if (guessNum == randomNum) {
        document.getElementById("result").innerHTML = "Correct";
        randomNum = Math.floor(Math.random() * 10 + 1);
        numOfGuess = 3;

        if (numOfStars == 3) {
            document.getElementById("img1").style.opacity = 1;
            numOfStars = 2;
        } else if (numOfStars == 2) {
            document.getElementById("img2").style.opacity = 1;
            numOfStars = 1;
        } else {
            document.getElementById("img3").style.opacity = 1;
            numOfStars = 0;
        }

    } else {

        numOfGuess--;
        numOfStars = 3;

        if (numOfGuess > 0) {
            document.getElementById("result").innerHTML = "You have " + numOfGuess + " guesses left.";
        } else {
            document.getElementById("result").innerHTML = "Oops... You used all your tries. You have to start from the begining.";
            numOfGuess = 3;

            document.getElementById("img1").style.opacity = 0.1;
            document.getElementById("img2").style.opacity = 0.1;
            document.getElementById("img3").style.opacity = 0.1;

            randomNum = Math.floor(Math.random() * 10 + 1);
        }


    }
}

// reset randon number
function tryAgain() {

    randomNum = Math.floor(Math.random() * 10 + 1);
    numOfGuess = 3;

}