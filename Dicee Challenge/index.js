var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelector("img.img1").setAttribute("src", randomImageSource);
document.querySelector("img.img2").setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
   document.querySelector(".container h1").textContent = "🚩Player 1 Wins!";
}else if (randomNumber1 < randomNumber2) {
   document.querySelector(".container h1").textContent = "Player 2 Wins!🚩";
} else if(randomNumber2 == randomNumber1){
   document.querySelector(".container h1").textContent = "Draw!";
}

