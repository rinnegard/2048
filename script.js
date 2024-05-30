console.log("Loaded");

const tiles = document.querySelectorAll(".tile");
console.log(tiles);

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowRight":
        case "d":
            moveTiles();
            break;
        case "ArrowLeft":
        case "a":
            moveTiles();
            break;
        case "ArrowDown":
        case "s":
            moveTiles();
            break;
        case "ArrowUp":
        case "w":
            moveTiles();
            break;
        default:
            break;
    }
})

function moveTiles(direction) {
    tiles.forEach((tile) => {
        tile.style.top = "200px";
    })
}