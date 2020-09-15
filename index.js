//Generates a random number between 1 and 6 to select the dice for each player
var randomNumber1 = Math.floor(Math.random() * 6 + 1); //1-6
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

//Generates a random angle to rotate the dice;
var rotate1 = "rotate(" + Math.random() * 360 + "deg)"; //0deg-360deg
var rotate2 = "rotate(" + Math.random() * 360 + "deg)";

//creates the filepath to the dice image that corresponds to randomNumber
var sourceNumber1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
var sourceNumber2 = "images/dice" + randomNumber2 + ".png";

//changes the dice images
document.querySelector(".img1").setAttribute("src", sourceNumber1);
document.querySelector(".img2").setAttribute("src", sourceNumber2);


// changes the h1 to identify the winner
// rotates each dice at a random angle
// if there's a draw, oreients dice straight
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "✨Player 1 Wins!";
  document.querySelector(".img1").style.transform = rotate1;
  document.querySelector(".img2").style.transform = rotate2;
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins!🎉";
  document.querySelector(".img1").style.transform = rotate1;
  document.querySelector(".img2").style.transform = rotate2;
} else {
  document.querySelector("h1").innerText = "⚔️Draw!⚔️";
  document.querySelector(".img1").style.transform = "rotate(0 deg)";
  document.querySelector(".img2").style.transform = "rotate(0 deg)";
}