import GameBoard from "./GameBoard.js";

console.log("Loaded");

class Tile {
    #x;
    #y;
    value;
    element;

    constructor(boardElement, value = Math.random() > 0.25 ? 2 : 4) {
        let newTile = document.createElement("div")
        newTile.classList.toggle("tile");

        this.element = newTile;
        this.value = value;

        newTile.textContent = this.value;

        boardElement.appendChild(newTile)
    }

    set x(pos) {
        this.element.style.setProperty("--x", pos);
        this.#x = pos;
    }

    set y(pos) {
        this.element.style.setProperty("--y", pos);
        this.#y = pos;
    }

    get x() {
        return this.#x;
    }
    
    get y() {
        return this.#y;
    }
}

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowRight":
        case "d":
            gameBoard.moveTiles("right");
            break;
        case "ArrowLeft":
        case "a":
            gameBoard.moveTiles("left");
            break;
        case "ArrowDown":
        case "s":
            gameBoard.moveTiles("down");
            break;
        case "ArrowUp":
        case "w":
            gameBoard.moveTiles("up");
            break;
        default:
            break;
    }
    gameBoard.randomEmptyCell().tile = new Tile(boardElement);
    console.log(gameBoard.emptyCells());
})



let boardElement = document.querySelector(".gameBoard");
let gameBoard = new GameBoard(boardElement);



gameBoard.randomEmptyCell().tile = new Tile(boardElement, 2);
gameBoard.randomEmptyCell().tile = new Tile(boardElement, 2);

console.log(gameBoard.emptyCells());

