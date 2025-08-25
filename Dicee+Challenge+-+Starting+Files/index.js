// function diceRoll() {
//     var images = [
//     "./images/dice1.png",
//     "./images/dice2.png",
//     "./images/dice3.png",
//     "./images/dice4.png",
//     "./images/dice5.png",
//     "./images/dice6.png"
// ]

//     var randomNumber1 = Math.floor(Math.random() * images.length);

//     return images[randomNumber1];
// }


var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "./images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImageSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🏆 Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "🙌🏼 Its a Draw";
}