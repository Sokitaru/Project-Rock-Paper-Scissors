// Algorithm
// create a function called getComputerChoice
// getComputerChoice will randomly return 'rock', 'paper' or 'scissors';
// use math.random function to return these choices by 1 or 0

//psuedocode
// LET CONST x = math.floor(Math.random)) * 3)
// FUNCTION getcomputerChoice()
//    IF x = 1
//    RETURN = 'rock'
//    IF ELSE = 0
//    RETURN = 'paper'
//    RETURN = 'scissors'


//code
const x = Math.floor(Math.random() * 3);
 
function getComputerChoice() {
    if (x === 1){
        return 'rock'
    }
    else if (x === 2) {
        return 'paper'
    }
    else {
        return 'scissors'
    }

}
    console.log(getComputerChoice())

