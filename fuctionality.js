
var random_dice1 = Math.floor(Math.random()* 6) + 1;//generate random number.
var dice_image1 = "images/dice"+ random_dice1 + ".svg";//create random dice images.

var random_dice2 = Math.floor(Math.random()* 6) + 1;//generate random number.
var dice_image2 = "images/dice"+ random_dice2 + ".svg";//create random dice images.


document.getElementById('dice1').setAttribute('src', dice_image1 );
document.getElementById('dice2').setAttribute('src', dice_image2 );


if(random_dice1 > random_dice2)
{
    // document.querySelector("h1").innerHTML = "Player 1 win!";
    document.getElementById("win2").style.display = "none";
}
else if(random_dice1 < random_dice2)
{
    // document.querySelector("h1").innerHTML = "Player 2 win!";
    document.getElementById("win1").style.display = "none";

}
else if(random_dice1 = random_dice2)
{
    document.querySelector("h1").innerHTML = "Draw!";
    document.getElementById("win2").style.display = "none";
}