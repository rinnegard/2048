export default class GameBoard {
    #cells;
    constructor(boardElement) {
        this.#cells = createCells(boardElement).map((cell, index) => {
            return new Cell(cell, index % 4, Math.floor(index / 4))
        })
    }

    get cells() {
        return this.#cells;
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

    cellsByRow() {
        return this.#cells.reduce((cellGrid, cell) => {
            cellGrid[cell.y] = cellGrid[cell.y] || []
            cellGrid[cell.y][cell.x] = cell
            return cellGrid
        }, [])
    }
    
    cellsByColumn() {
        return this.#cells.reduce((cellGrid, cell) => {
            cellGrid[cell.x] = cellGrid[cell.x] || []
            cellGrid[cell.x][cell.y] = cell
            return cellGrid
        }, [])
    }

    moveRight() {
        return this.moveTiles(this.cellsByRow().toReversed())
    }

    
    moveLeft() {
        return this.moveTiles(this.cellsByRow())
    
    }

    moveTiles(cells) {
        cells.map((row) => {
            for (let i = 0; i < row.length; i++) {
                console.log(row[i]);
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

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
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

