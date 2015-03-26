var rockPaperScissorsLizardSpock = function() {
var userChoice = prompt("Choose one of the following: rock, paper, scissors, lizard or Spock");
var computerChoice = Math.random();

switch(true) {
	case (computerChoice < 0.20):
	computerChoice = 'rock';
	break;
	case (computerChoice >= 0.20 && computerChoice < 0.40):
	computerChoice = 'paper';
	break;
	case (computerChoice >= 0.40 && computerChoice < 0.60):
	computerChoice = 'scissors';
	break;
	case (computerChoice >= 0.60 && computerChoice < 0.80):
	computerChoice = 'lizard';
	break;
	default:
	computerChoice = 'Spock';
}

alert("Computer's choice was: " + computerChoice);

var compare = function(choice1, choice2) {
	if (choice1 === choice2 || (choice1 === 'spock' && choice2 === "Spock")) {
		alert("It's a tie!");
	}
	else if (choice1 === 'rock') {
		if (choice2 === 'paper') {
			alert("Paper covers rock, computer wins!");
		}
		else if (choice2 === 'scissors') {
			alert("Rock crushes scissors, you win!");
		}
		else if (choice2 === 'lizard') {
			alert("Rock crushes lizard, you win!");
		}
		else {
			alert("Spock vaporizes rock, computer wins!")
		}
	}
	else if (choice1 === 'paper') {
		if (choice2 === 'rock') {
			alert("Paper covers rock, you win!");
		}
		else if (choice2 === 'scissors') {
			alert("Scissors cut paper, computer wins!");
		}
		else if (choice2 === 'lizard') {
			alert("Lizard eats paper, computer wins!");
		}
		else {
			alert("Paper disproves Spock, you win!")
		}
	}
	else if (choice1 === 'scissors') {
		if (choice2 === 'rock') {
			alert("Rock crushes scissors, computer wins!");
		}
		else if (choice2 === 'paper') {
			alert("Scissors cut paper, you win!");
		}
		else if (choice2 === 'lizard') {
			alert("Scissors decapitate lizard, you win!");
		}
		else {
			alert("Spock smashes scissors, computer wins!");
		}
	}
	else if (choice1 === 'lizard') {
		if (choice2 === 'rock') {
			alert("Rock crushes lizard, computer wins!");
		}
		else if (choice2 === 'paper') {
			alert("Lizard eats paper, you win!");
		}
		else if (choice2 === 'scissors') {
			alert("Scissors decapitate lizard, computer wins!");
		}
		else {
			alert("Lizard poisons Spock, you win!");
		}
	}
	else if (choice1 === 'Spock' || choice1 === 'spock') {
		if (choice2 === 'rock') {
			alert("Spock vaporizes rock, you win!");
		}
		else if (choice2 === 'paper') {
			alert("Paper disproves Spock, computer wins!");
		}
		else if (choice2 === 'scissors') {
			alert("Spock smashes scissors, you win!");
		}
		else {
			alert("Lizard poisons Spock, computer wins!");
		}
	}
	else {
		alert("Please check your spelling. Enter one of the following options: rock, paper, scissors, lizard or Spock.")
	}
}

compare(userChoice, computerChoice);

var playAgain = confirm("Play again?");
if (playAgain === true) {
	rockPaperScissorsLizardSpock();
}
}

setTimeout(rockPaperScissorsLizardSpock, 500);
