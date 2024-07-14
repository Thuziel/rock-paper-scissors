let userChoice = null; //0=rock, 1=paper, 2=scissors
let houseChoice = null; //0=rock, 1=paper, 2=scissors

function generateEverTurn() {
    let results = document.querySelector("#results");
    houseChoice = Math.floor(Math.random() * 3);
}

function didUserWin(e) {
    let elemID = e.target.id;
    generateEverTurn();
    switch(elemID) {
        case "rockBtn":
            userChoice = 0;
            break;
        case "paperBtn":
            userChoice = 1;
            break;
        case "scissorsBtn":
            userChoice = 2;
    }
    if(userChoice == 1 && houseChoice == 0) {userWon("Paper", "Rock")}
    else if (userChoice == 2 && houseChoice == 1) {userWon("Scissors", "Paper")}
    else if (userChoice == 0 && houseChoice == 2) {userWon("Rock", "Scissors")}
    else {houseWon()}
}

function userWon(user, house) {
    results.textContent = "You won! "+user+" beats "+house+".";
    
}

function houseWon(user, house) {
    results.textContent = "You lost!";
}

let content = document.querySelector('#main');
content.addEventListener("click", didUserWin);

