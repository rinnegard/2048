export default class Tile {
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