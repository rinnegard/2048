export default class GameBoard {
    #cells;
    constructor(boardElement) {
        this.#cells = createCells(boardElement).map((cell, index) => {
            return new Cell(cell, index % 4, Math.floor(index / 4))
        })
        console.log(this.#cells);
    }

    emptyCells() {
        return this.#cells.filter((cell) => {
            return cell.tile == undefined;
        })
    }

    fullCells() {
        return this.#cells.filter((cell) => {
            return cell.tile != undefined;
        })
    }

    randomEmptyCell() {
        let emptyCells = this.emptyCells();
        let rand = Math.floor(Math.random() * emptyCells.length);
        return emptyCells[rand];
    }

    moveTiles(direction) {
        let min = 0;
        let max = 3;

        let fullCells = this.fullCells();
    
    
        fullCells.forEach((cell) => {
            let tile = cell.tile

    
            if (direction === "right" && tile.x < max) {
                tile.x = tile.x + 1;
            } else if (direction === "left" && tile.x > min) {
                tile.x = tile.x - 1;
            } else if (direction === "down"  && tile.y < max) {
                tile.y = tile.y + 1;
            } else if (direction === "up" && tile.y > min) {
                tile.y = tile.y - 1;
            }
        })
    }
}

class Cell {
    #x;
    #y;
    element;
    #tile;

    constructor(element, x, y) {
        this.element = element;
        this.#x = x;
        this.#y = y;
    }

    set tile(tile) {
        this.#tile = tile
        this.#tile.x = this.#x
        this.#tile.y = this.#y
    }

    get tile() {
        return this.#tile;
    }
}


function createCells(boardElement) {
    let cells = [];
    for (let index = 0; index < 16; index++) {
        let cell;
        cell = document.createElement("div");
        cell.classList.add("cell")

        cells.push(cell);
        boardElement.appendChild(cell);
    }
    return cells;
}

