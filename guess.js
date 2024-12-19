//We will create the logic of the game

//The declaration of the variables and the generation of random numbers
let randomNumber= Math.floor(Math.random()*100)+1;//Another form could be random_number
const guesses = document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const loworHi= document.querySelector(".loworHi");
//We save the reference to th input elements with the specified classes.
const guessSubmit=document.querySelector(".guessSubmit");
const guessField=document.querySelector(".guessField");
//We save the number of attempts and a variable to generate;
let guessCount=1;
let resetButton;//for creating a reference to the button.

//functions
//there are codeblocks that are reusable that we write only once and we can execute the action over and over again;
function checkGuess(){
    //sum= 30+50
  //  alert("I am a function");
  // alert("the sum is:"+sum);
let userGuess = Number(guessField.value);
if(userGuess===randomNumber){
   lastResult.textContent="Congratulations!";
   lastResult.style.backgroundColor="green";
   loworHi.textContent="";
   setGameOver();
}
else if(guessCount===10){
  lastResult.textContent="Game over!";
  setGameOver();
}
else{
  lastResult.textContent="Incorrect!";
  lastResult.style.backgroundColor="red";
  //check if the number introduced is higher or lower than the random one
  //we help the player to guess the number
  if(userGuess<randomNumber){
    loworHi.textContent="the number is lower";
  }else if(userGuess>randomNumber){
    loworHi.textContent="the number is higher"
  }
}
guessCount++;
guessField.value="";
guessField.focus();
}
guessSubmit.addEventListener("click",checkGuess);
function setGameOver(){
  guessField.disabled=true;
  guessSubmit.disabled=true;
  resetButton=document.createElement("button");
  resetButton.textContent="Try again";
  resetButton.style.backgroundColor="black";
  resetButton.style.color="purple";
  resetButton.style.padding="10px";
  resetButton.style.border="1px solid purple";
  resetButton.style.borderRadius="5px";
  document.body.append(resetButton);
  resetButton.addEventListener("click",resetGame);
}
function resetGame(){
  guessCount=1;

  const resetParas=document.querySelectorAll(".resultParas p");
for(let i=0;i<resetParas.length;i++){
  resetParas[i].textContent="";}

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled=false;
  guessSubmit.disabled=false;
  guessField.value="";
  guessField.focus();
  lastResult.style.backgroundColor="black";
  randomNumber=Math.floor(Math.random()*100)+1;
}