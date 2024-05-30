console.log("Loaded");

const tiles = document.querySelectorAll(".tile");
console.log(tiles);

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
    tiles.forEach((tile) => {
        console.log("Left:", tile.offsetLeft);
        console.log("Top:", tile.offsetTop);
        if (direction === "right") {
             tile.style.left = `${tile.offsetLeft + 112}px`; //TODO Remove hardcode
        } else if (direction === "left") {
            tile.style.left = `${tile.offsetLeft - 132}px`; //TODO Remove hardcode
        } else if (direction === "down") {
            tile.style.top = `${tile.offsetTop + 112}px`; //TODO Remove hardcode
        } else if (direction === "up") {
            tile.style.top = `${tile.offsetTop - 132}px`; //TODO Remove hardcode
        }
    })
}