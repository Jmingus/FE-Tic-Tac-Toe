var clear = require('cli-clear');
var prompt = require('prompt-sync').prompt;

var player1 = {};
var player2 = {};
var player1Move = null;
var player2Move = null;
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

console.log('Welcome to the game of Tic-Tac-Toe!');
console.log("-----------------------------------");
console.log('Player 1 what is your name?');
player1.name = prompt();
console.log('Player 2 what is your name?');
player2.name = prompt();

printBoard();