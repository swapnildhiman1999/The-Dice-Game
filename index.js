var randomNumber1=Math.floor((Math.random()*6)+1);

//could have done_simply
//var randomDiceImage="dice"+randomNumber1+".png";
//var randomImageSource="images/"+randomDiceImage;
var_string="images/"
if(randomNumber1==1){
  var_string+="dice1.png"
}

if(randomNumber1==2){
  var_string+="dice2.png"
}

if(randomNumber1==3){
  var_string+="dice3.png"
}

if(randomNumber1==4){
  var_string+="dice4.png"
}

if(randomNumber1==5){
  var_string+="dice5.png"
}

if(randomNumber1==6){
  var_string+="dice6.png"
}
document.querySelector("img.img1").setAttribute("src",var_string);
//var image1=document.querySelectorAll("img")[0];


//for right side of image
var randomNumber2=Math.floor((Math.random()*6)+1);

var_string="images/"
if(randomNumber2==1){
  var_string+="dice1.png"
}

if(randomNumber2==2){
  var_string+="dice2.png"
}

if(randomNumber2==3){
  var_string+="dice3.png"
}

if(randomNumber2==4){
  var_string+="dice4.png"
}

if(randomNumber2==5){
  var_string+="dice5.png"
}

if(randomNumber2==6){
  var_string+="dice6.png"
}
document.querySelector("img.img2").setAttribute("src",var_string);

if(randomNumber1==randomNumber2)
{
  document.querySelector("h1").innerHTML="Draw!";
}
if(randomNumber1>randomNumber2){
 document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
