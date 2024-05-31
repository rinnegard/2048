export default class GameBoard {
    #cells;
    constructor(boardElement) {
        this.#cells = createCells(boardElement).map((cell, index) => {
            return new Cell(cell, index % 4, Math.floor(index / 4))
        })
        console.log(this.#cells);
    }

    randomEmptyCell() {
        let rand = Math.floor(Math.random() * 16);
        return this.#cells[rand];
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

