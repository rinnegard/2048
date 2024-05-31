console.log("Loaded");

class Tile {
    x;
    y;
    element;

    constructor() {
        let newTile = document.createElement("div")
        newTile.classList.toggle("tile");

        this.element = newTile;
        
        this.x = Math.floor(Math.random() * 4);
        this.y = Math.floor(Math.random() * 4);

        newTile.textContent = "2";
        
        newTile.style.setProperty("--x", this.x)
        newTile.style.setProperty("--y", this.y)
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

        let x = Number(tile.style.getPropertyValue("--x"));
        let y = Number(tile.style.getPropertyValue("--y"));
        console.log("x:", x);
        console.log("y:", y);

        if (direction === "right" && x < max) {
            tile.style.setProperty("--x", x + 1);
        } else if (direction === "left" && x > min) {
            tile.style.setProperty("--x", x - 1);
        } else if (direction === "down"  && y < max) {
            tile.style.setProperty("--y", y + 1);
        } else if (direction === "up" && y > min) {
            tile.style.setProperty("--y", y - 1);
        }
    })
}

let newTile = new Tile();

let gameBoard = document.querySelector(".gameBoard");
gameBoard.appendChild(newTile.element)


const tiles = document.querySelectorAll(".tile");
console.log(tiles);

