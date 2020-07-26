//generate a random number between 1 and 10
var randomNum = Math.floor(Math.random() * 10 + 1);

var numOfGuess = 3;
var numOfStars = 0;

//create an array of stars
var images = ["img1", "img2", "img3"];

//guess a number
function guessNumber() {
    //read a value entered by the player
    var guessNum = document.getElementById("guessNum").value;

    //if a number entered and a random number is equal - display Correct text, 
    //generate a new random number,reset a number of guesses to 3 and add a star
    //else minus one number of guesses
    if (guessNum == randomNum) {
        document.getElementById("result").innerHTML = "Correct";
        randomNum = Math.floor(Math.random() * 10 + 1);
        numOfGuess = 3;
        numOfStars++;
    } else {
        numOfGuess--;
        //if number of guesses bigger 0 - continue a game
        //else reset a game
        if (numOfGuess > 0) {
            document.getElementById("result").innerHTML = "You have " + numOfGuess + " guesses left." + randomNum;
        } else {
            document.getElementById("result").innerHTML = "Oops... You used all your tries. You have to start from the begining.";
            numOfGuess = 3;
            numOfStars = 0;
            //set opacity of all stars in the array to 0.1
            images.forEach(function (i) {
                document.getElementById(i).style.opacity = 0.1;
            })
            //generate a new random number
            randomNum = Math.floor(Math.random() * 10 + 1);
        }
    }

    //if number od stars equal 1 - change the opacity of first star...
    if (numOfStars == 1) {
        document.getElementById(images[0]).style.opacity = 1;
    } else if (numOfStars == 2) {
        document.getElementById(images[1]).style.opacity = 1;
    } else if (numOfStars == 3) {
        document.getElementById(images[2]).style.opacity = 1;
        document.getElementById("result").innerHTML = "Winner! ! !";
        //set Try Again button visible
        document.getElementById("tryAgain").style.opacity = 1;
        //change background image
        document.getElementById("form").style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/06/23/15/22/balloons-2434982_960_720.jpg')";
    }
}

//start the game again
function tryAgain() {
    randomNum = Math.floor(Math.random() * 10 + 1);
    numOfGuess = 3;
    numOfStars = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("form").style.backgroundImage = 'none';
    document.getElementById("tryAgain").style.opacity = 0;
    //set the visibility of all stars in the array to 0.1
    images.forEach(function (i) {
        document.getElementById(i).style.opacity = 0.1;
    })
}