var clear = require('cli-clear');
var prompt = require('prompt-sync').prompt;
var colors = require('colors');
var turnCounter = 0;
var regex = /[1-3]\s[1-3]/;
var player1 = {
    mark: 'X'.red
};
var player2 = {
    mark: 'O'.blue
};
var winFlag = false;
var currentPlayer = null;
var formattedMove = null;


var board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
];

var printBoard = function(){
    console.log(
        '     1  '+ ' 2  '+' 3  \n'+
        '   ~~~~~~~~~~~~~\n'+
    '1'+'  |  ' + board[0][0] + '| ' + board[0][1] + ' | ' + board[0][2] + ' |  \n'+
        '   ~~~~~~~~~~~~~\n'+
    '2'+'  |  ' + board[1][0] + '| ' + board[1][1] + ' | ' + board[1][2] + ' |  \n'+
        '   ~~~~~~~~~~~~~\n'+
    '3'+'  |  ' + board[2][0] + '| ' + board[2][1] + ' | ' + board[2][2] + ' |  \n'+
        '   ~~~~~~~~~~~~~\n')
};

var validInput = function(regex, move){
    if(regex.test(move)){
       formattedMove = currentPlayer.move.split(" ")
    }else{
        console.log("Try Again, Numbers must between 1 and 3" +
            " plus contain a space in between them");
        currentPlayer.move = prompt();
    };
};

var playerTurn = function(turnCounter){
    if (turnCounter % 2 === 0) {
        currentPlayer = player1;
    }else{
        currentPlayer = player2;
    }
};

var checkIfWon = function(board, winningCombo){
    for(var i = 0; i < board.length; i++){
        if (board[i].join('') === winningCombo){
            return true;
            break;
        }
    };
    if(board[0][0] + board[1][0]+ board[2][0] === winningCombo){
        return true;
    }else if(board[0][1] + board[1][1] + board[2][1] === winningCombo){
        return true;
    }else if(board[0][2] + board[1][2] + board[2][2] === winningCombo){
        return true;
    }else if(board[0][0] + board[1][1] + board[2][2] === winningCombo){
        return true;
    }else if(board[2][0] + board[1][1] + board[0][2] === winningCombo){
        return true;
    }else{
        return false;
    }
};

console.log('Welcome to the game of Tic-Tac-Toe!'.rainbow);
console.log("-----------------------------------");
console.log('Player 1 what is your name?'); player1.name = prompt();
console.log('Your X\n'.red);
console.log("-----------------------------------");
console.log('Player 2 what is your name?'); player2.name = prompt();
console.log('Your O\n'.blue);
console.log("-----------------------------------\n");
printBoard();

while((winFlag === false) || (turnCounter < 9)){
    playerTurn(turnCounter);
    turnCounter++;
    console.log(currentPlayer.name + ' it is your turn!');
    console.log('Enter your move now!'.magenta);
    currentPlayer.move = prompt();
    while(formattedMove === null) {
        validInput(regex, currentPlayer.move);
        var xCoord = formattedMove[0];
        var yCoord = formattedMove[1];
        if (board[yCoord - 1][xCoord - 1] === player1.mark || board[yCoord - 1][xCoord - 1] === player2.mark){
            console.log("That move is already taken!!");
            formattedMove = null;
            currentPlayer.move = prompt();
        }else {
            board[yCoord - 1][xCoord - 1] = currentPlayer.mark;
        }
    };
    printBoard();
    var winningCombo = currentPlayer.mark + currentPlayer.mark + currentPlayer.mark;
    if (checkIfWon(board, winningCombo) === true){
        console.log(currentPlayer.name + ' ' + 'has won!');
        winFlag = true;
        break;
    }
    console.log(checkIfWon(board, winningCombo));
    console.log(winFlag)
    formattedMove = null;
}
