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

//Algorithm
// Create new function called getHumanChoice
// return one of the choices depending on what the user enters
// use the prompt function
// test with console.log

// Psuedocode
// FUNCTION getHumanChoice()
// LET userChoice = prompt('rock, paper, or scissors')
// IF userChoice = 'rock'
//    return 'rock'
// IF userChoice = 'paper'
//    return 'paper'
// IF userChoice = 'scissors'
//    return 'scissors'
// console.log getHumanChoice

//code

function getHumanChoice() {
    let userChoice = prompt('rock, paper, or scissor')
    if (userChoice === 'rock') {
        return 'scissor'
    }
    else if (userChoice === 'paper') {
        return 'rock'
    }
    else if (userChoice === 'scissor') {
        return 'paper'
    }
}

console.log(getHumanChoice())