let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result  > p");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")
const userLabel = document.getElementById("user-label")
const computerLabel = document.getElementById("computer-label")
const animationDelay = 500;


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber]
    //array of choices
    //random number
    //return the choice with the array id of the random number (0, 1, 2)
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div =document.getElementById(userChoice);
    result_div.innerHTML = `Your choice of ${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    userChoice_div.classList.add('green-glow');
    userLabel.classList.add('green-glow')
    setTimeout(() => userChoice_div.classList.remove('green-glow'), animationDelay)
    setTimeout(() => userLabel.classList.remove('green-glow'), animationDelay)
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div =document.getElementById(userChoice);
    result_div.innerHTML = `Your choice of  ${convertToWord(computerChoice)} beats  ${convertToWord(userChoice)}. You lose!`;
    userChoice_div.classList.add('red-glow');
    computerLabel.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), animationDelay)
    setTimeout(()=>computerLabel.classList.remove('green-glow'), animationDelay)
}

function draw(userChoice, computerChoice){
    const userChoice_div =document.getElementById(userChoice);
    result_div.innerHTML = `Your choice of ${convertToWord(computerChoice)} matches Computer Choice ${convertToWord(userChoice)}. Draw!!!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), animationDelay)
    userLabel.classList.add('gray-glow');
    computerLabel.classList.add('gray-glow');
    setTimeout(()=> userLabel.classList.remove('gray-glow'), animationDelay)
    setTimeout(()=> computerLabel.classList.remove('gray-glow'), animationDelay)
};

function game(userChoice){
    //console.log("User Chose: " + userChoice)
    const computerChoice = getComputerChoice();
    //console.log("Computer Chose: " + computerChoice)
    /*if (userChoice === computerChoice) {
        console.log("DRAW!!!")
    }
    else {
        console.log("there is a winner")
    }*/

    //going to uswe switch statements instead of IF statements
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
           draw(userChoice, computerChoice);
            break;        
    }

}


function main() {
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));

}


main();
