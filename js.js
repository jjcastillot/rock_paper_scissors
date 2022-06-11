//MAIN SCRIPT

// FUNCTIONS CREATED

// Game function. Plays rounds until one of players win 5 rounds
function game () {
    let playerScore = 0;
    let compScore = 0;
    while ((playerScore <5) && (compScore < 5)) {
        [round,player,comp] = playRound(playerSelection(),computerPlay());
        switch (round) {
            case 'W':
                playerScore += 1;
                console.log(`You chose ${player}. Comp choose ${comp}. YOU WIN!`);
                console.log(`Player: ${playerScore}. Computer: ${compScore}.`);
                break;
            case 'L':
                compScore += 1;
                console.log(`You chose ${player}. Comp choose ${comp}. YOU LOSE :(`);
                console.log(`Player: ${playerScore}. Computer: ${compScore}.`);
                break;
            case 'T':
                console.log(`You chose ${player}. Comp choose ${comp}. IT\'S A TIE.`);
                console.log(`Player: ${playerScore}. Computer: ${compScore}.`);
                break;
            case 'E':
                console.log('Error. Wrong user input. Please try again');
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

// One round. Takes your play and computer's, then decides a Win, Lose or Tie
function playRound(player,computer) {
    if (player === 'Rock') {
        switch(computer){
            case 'Rock':
                return ['T','Rock','Rock'];
                break;
            case 'Paper':
                return ['L','Rock','Paper'];
                break;
            case 'Scissors':
                return ['W','Rock','Scissors'];
                break;
        }   
    } else if (player ==='Paper') {
        switch(computer){
            case 'Paper':
                return ['T','Paper','Paper'];
                break;
            case 'Scissors':
                return ['L','Paper','Scissors'];
                break;
            case 'Rock':
                return ['W','Paper','Rock'];
                break;
        }     
    } else if (player ==='Scissors') {
        switch(computer){
            case 'Scissors':
                return ['T','Scissors','Scissors'];
                break;
            case 'Rock':
                return ['L','Scissors','Rock'];
                break;
            case 'Paper':
                return ['W','Scissors','Paper'];
                break;
        }
    } else {
        return ['E','0','0'];
    }
    //return 'End of round';
}

// Takes your play
function playerSelection() {
    let play = +prompt('Make your choice\n1)Rock\n2)Paper\n3)Scissors');
    return choice(play);
}

// Makes a random choice for computer
function computerPlay() {
    let play = random(3);
    //console.log(play)
    return choice(play);
    
}

// Makes a random choice for computer
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

// Makes a random choice from 1 to 3 
function random(number) {
    return Math.ceil(Math.random()*number);
    }