import GameBoard from "./GameBoard.js";
import Tile from "./Tile.js"

console.log("Loaded");



window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowRight":
        case "d":
            gameBoard.moveRight("right");
            break;
        case "ArrowLeft":
        case "a":
            gameBoard.moveLeft("left");
            break;
        case "ArrowDown":
        case "s":
            gameBoard.moveDown("down");
            break;
        case "ArrowUp":
        case "w":
            gameBoard.moveUp("up");
            break;
        default:
            break;
    }
    gameBoard.randomEmptyCell().tile = new Tile(boardElement);
})



let boardElement = document.querySelector(".gameBoard");
let gameBoard = new GameBoard(boardElement);



gameBoard.randomEmptyCell().tile = new Tile(boardElement, 2);
gameBoard.randomEmptyCell().tile = new Tile(boardElement, 2);

console.log(gameBoard.cellsByRow());
console.log(gameBoard.cells);



