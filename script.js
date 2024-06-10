
//CREATE bool:userWin for user win/lose state
let userWon = null;

//CREATE var:totalWins
let totalWins = 0;

//CREATE var:winStreak
let winStreak = 0;

//CREATE var:amountOfTurns
let amountOfTurns = 0;

//CREATE var:winPercentage
let winPercentage = 0;

//WHEN user picks option
function clicked(btnIDString) {
    //CREATE var:btnID  to store int(btnID) for later use
    let btnID = Number(btnIDString);

    //CREATE var:randomNum from num 1-3
    let randomNum = Math.floor(Math.random() * 3) + 1;

    //compare int of btnID to random number between 1-3
    ///IF randomNum == 1 && btnID == 2:
    if (randomNum == 1 && btnID == 2) {
        //user win = false
        userWon = false;
        //winStreak = 0
        winStreak = 0;
        //amount of turns += 1
        amountOfTurns += 1;
    }
    //ELSE IF randomNum == 2 && btnID == 3:
    else if (randomNum == 2 && btnID == 3) {
        //user win = false
        userWon = false;
        //winStreak = 0
        winStreak = 0;
        //amount of turns += 1
        amountOfTurns += 1;
    }
    //ELSE IF randomNum == 3 && btnID == 1:
    else if (randomNum == 3 && btnID == 1) {
        //user win = flase
        userWon = false;
        //winStreak = 0
        winStreak = 0;
        //amount of turns += 1
        amountOfTurns += 1;
    }
    else if (randomNum == btnID) {
        userWon = false;
        amountOfTurns += 1;
    }
    //ELSE
    else {
        //user win = true 
        userWon = true;
        //winStreak += 1
        winStreak += 1;
        //amount of turns += 1
        amountOfTurns += 1;
        //totalWins += 1
        totalWins += 1;
    }

    //update html
    //update selection
    //    paper > rock > scissors > paper
    //    1     > 2    > 3        > 1
    //two if loops to get userOptionText & myOptionText
    let userOptionText = '';
    let myOptionText = '';

    if (btnID == 1) {
        userOptionText = 'Paper';
    }
    else if (btnID == 2) {
        userOptionText = 'Rock';
    }
    else {
        userOptionText = 'Scissors';
    }

    if (randomNum == 1) {
        myOptionText = 'Paper';
    }
    else if (randomNum == 2) {
        myOptionText = 'Rock';
    }
    else {
        myOptionText = 'Scissors';
    }

    document.getElementById('selection').innerHTML = '';
    document.getElementById('selection').innerHTML = 'Your '+userOptionText+' VS My '+myOptionText;

    //update result
    document.getElementById('result').innerHTML = '';
    if (userWon) {
        document.getElementById('result').innerHTML = 'You Won!'
    } else {
        if (randomNum == btnID) {
        document.getElementById('result').innerHTML = 'It\'s a tie'
        } else {
            document.getElementById('result').innerHTML = 'You Lose!'
        }
    }
    
    // //update win streak
    // document.getElementById('winStreak').innerHTML = '';
    // document.getElementById('winStreak').innerHTML = 'Win Streak: '+winStreak.toString();

    // //update win percentage
    // winPercentage = Math.floor((totalWins/amountOfTurns)*100);
    // document.getElementById('winPercentage').innerHTML = 'Win Percentage: '+winPercentage.toString()+'%';
}