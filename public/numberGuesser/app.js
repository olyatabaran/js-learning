//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI elements
const gameWrapper = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

//Play Again event listener
gameWrapper.addEventListener('mousedown',function (e) {
  if(e.target.className === 'play-again'){
      window.location.reload();
  }
});


//Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    //Validate input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter the number between ${min} and ${max}`,'red');
    }

    //Check if won
    if(guess === winningNum){
        //Game over - won
        gameOver(true,`${winningNum} is correct, YOU WIN`);
    }else{
        //Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            //Game over - lost
          gameOver(false,`Game over, you lost. The correct number was ${winningNum}`);
        }else{
            //Change border color
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            //Tell user it is wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }

});

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

//Get Random Number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+min);
}

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : 'red';

    //Disable input
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = color;
    //Set text color
    message.style.color = color;
    //Set message
    setMessage(msg);
    
    //Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

}

