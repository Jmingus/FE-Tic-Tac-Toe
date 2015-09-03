var clear = require('cli-clear');
var prompt = require('prompt-sync').prompt;
var turnCounter = 0;
var regex = /[1-3]\s[1-3]/;
var player1 = {};
var player2 = {};
var winFlag = false;
var currentPlayer = null;
var cleanMove = null;

var board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
];

var printBoard = function(){
    console.log(
        '     1  '+ ' 2  '+' 3  \n'+
        '   ~~~~~~~~~~~~~\n'+
    '1'+'  |  ' + board[0][0] + '|  ' + board[0][1] + '|  ' + board[0][2] + '|  \n'+
        '   ~~~~~~~~~~~~~\n'+
    '2'+'  |  ' + board[1][0] + '|  ' + board[1][1] + '|  ' + board[1][2] + '|  \n'+
        '   ~~~~~~~~~~~~~\n'+
    '3'+'  |  ' + board[2][0] + '|  ' + board[2][1] + '|  ' + board[2][2] + '|  \n'+
        '   ~~~~~~~~~~~~~\n')
};

var validInput = function(regex, move){
    if(regex.test(move)){
       cleanMove = currentPlayer.move.split(" ")
    }else{
        console.log("Try Again, Numbers must between 1 and 3" +
            " plus contain a space in between them");
        currentPlayer.move = prompt();
    };
}

var playerTurn = function(turnCounter){
    if (turnCounter % 2 === 0) {
        currentPlayer = player1;
    }else{
        currentPlayer = player2;
    }
};
console.log('Welcome to the game of Tic-Tac-Toe!');
console.log("-----------------------------------");
console.log('Player 1 what is your name?');
player1.name = prompt();
console.log('Player 2 what is your name?');
player2.name = prompt();

printBoard();
clear();

while(winFlag = false || turnCounter < 9){
    playerTurn(turnCounter);
    turnCounter++;
    console.log(currentPlayer.name + ' it is your turn!');
    console.log('Enter your move now!');
    validInput(regex, currentPlayer.move = prompt());


}