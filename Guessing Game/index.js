//Initializing values
let attempts = 0; 
let won = 0;
let lost = 0;
//Element Selection
const inputField = document.getElementById("gussedNumber");
let form = document.querySelector("form");
let wonLoseMessage = document.querySelector(".wonLoseMessage");
let remainingAttempts = document.querySelector(".remainingAttempts");
let wonCounter = document.querySelector(".wonCount");
let loseCounter = document.querySelector(".loseCount");



//Getting User Input
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    attempts++;
    if(attempts > 10){
        inputField.disabled = true;
    }else{
        checkResult(Number(inputField.value));
    }
    attemptRemains(attempts);
});


//Generate Random Number
const getRandomNumber = (limit)=>{
    let generateRandomNumber = Math.floor(Math.random() * limit) + 1;
    return generateRandomNumber;
}

//Checking Result 
const checkResult = (userInput)=>{
    let randomNumber = getRandomNumber(10);
    if(userInput === randomNumber){
        wonLoseMessage.innerHTML = `You Won!`
        wonLoseMessage.style.color = "#33f915";
        won++;
        wonCounter.innerHTML = won;
    }else{
        wonLoseMessage.innerHTML = `You have lost! The number was ${randomNumber}`;
        wonLoseMessage.style.color = "red";
        lost++;
        loseCounter.innerHTML = lost;
    }
}
//Remaining Attempts
const attemptRemains = (leftAttempts)=>{
    remainingAttempts.innerHTML = `You have ${11 - leftAttempts} attempts left`;
    switch(leftAttempts){
        case 6 : remainingAttempts.style.color = "yellow";
        break;
        case 10 : remainingAttempts.style.color = "red";
    }
}
