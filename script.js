import GameBoard from "./GameBoard.js";

console.log("Loaded");

class Tile {
    #x;
    #y;
    value;
    element;

    constructor(boardElement) {
        let newTile = document.createElement("div")
        newTile.classList.toggle("tile");

        this.element = newTile;
        this.value = Math.random() > 0.25 ? 2 : 4;

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
            moveTiles("right");
            break;
        case "ArrowLeft":
        case "a":
            moveTiles("left");
            break;
        case "ArrowDown":
        case "s":
            moveTiles("down");
            break;
        case "ArrowUp":
        case "w":
            moveTiles("up");
            break;
        default:
            break;
    }
})

function moveTiles(direction) {
    let min = 0;
    let max = 3;


    tiles.forEach((tile) => {

        let x = Number(tile.element.style.getPropertyValue("--x"));
        let y = Number(tile.element.style.getPropertyValue("--y"));
        console.log(tile.x);
        console.log("x:", x);
        console.log("y:", y);

        if (direction === "right" && x < max) {
            tile.x = tile.x + 1;
        } else if (direction === "left" && x > min) {
            tile.x = tile.x - 1;
        } else if (direction === "down"  && y < max) {
            tile.y = tile.y + 1;
        } else if (direction === "up" && y > min) {
            tile.y = tile.y - 1;
        }
    })
}

let boardElement = document.querySelector(".gameBoard");
let gameBoard = new GameBoard(boardElement);



gameBoard.randomEmptyCell().tile = new Tile(boardElement);

console.log(gameBoard.emptyCells());



// const tiles = [];
// for (let index = 0; index < 2; index++) {
//     tiles.push(new Tile())
// }

// tiles.forEach((tile) => {
//     boardElement.appendChild(tile.element)
// })


