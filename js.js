//MAIN SCRIPT



// FUNCTIONS CREATED
function game () {
    let playerScore = 0;
    let compScore = 0;
    while ((playerScore <5) && (compScore < 5)) {
        round = playRound(playerSelection(),computerPlay());
        switch (round) {
            case 'W':
                playerScore += 1;
                console.log(`Player: ${playerScore}. Computer: ${compScore}.`);
                break;
            case 'L':
                compScore += 1;
                console.log(`Player: ${playerScore}. Computer: ${compScore}.`);
                break;
            case 'T':
                console.log(`Player: ${playerScore}. Computer: ${compScore}.`);
                break;
        }
        if (playerScore === 5) {
            return 'Player wins!';
        } else if (compScore === 5) {
            return 'Computer wins :(';
        } else {
            console.log('Keep playing');
        }
    }
}

function playRound(player,computer) {
    if (player === 'Rock') {
        switch(computer){
            case 'Rock':
                console.log('Computer chose Rock. It\'s a tie!');
                return 'T';
                break;
            case 'Paper':
                console.log('Computer chose Paper. You lose :(');
                return 'L';
                break;
            case 'Scissors':
                console.log('Computer chose scissors. You win!');
                return 'W';
                break;
        }   
    } else if (player ==='Paper') {
        switch(computer){
            case 'Paper':
                console.log('Computer chose Paper. It\'s a tie!');
                return 'T';
                break;
            case 'Scissors':
                console.log('Computer chose Scissors. You lose :(');
                return 'L';
                break;
            case 'Rock':
                console.log('Computer chose Rock. You win!');
                return 'W';
                break;
        }     
    } else if (player ==='Scissors') {
        switch(computer){
            case 'Scissors':
                console.log('Computer chose Scissors. It\'s a tie!');
                return 'T';
                break;
            case 'Rock':
                console.log('Computer chose Rock. You lose :(');
                return 'L';
                break;
            case 'Paper':
                console.log('Computer chose Paper. You win!');
                return 'W';
                break;
        }
    } else {
        console.log('Error. Wrong user input. Please try again')
    }
    //return 'End of round';
}

function playerSelection() {
    let play = +prompt('Make your choice\n1)Rock\n2)Paper\n3)Scissors');
    return choice(play);
}

function computerPlay() {
    let play = random(3);
    //console.log(play)
    return choice(play);
    
}

function choice(play) {
    if (play ===1) {
        return 'Rock';
    } else if (play ===2) {
        return 'Paper';
    } else if (play ===3){
        return 'Scissors';
    } else {
        return 'Error. Please try again'
    }
}

function random(number) {
    return Math.ceil(Math.random()*number);
    }