let width = 800;
let height = 800;
let size = 10;

let cols, rows;

let grid = [];
let stack = [];
let current;

function setup() {
    createCanvas(width, height);
    // frameRate(5);
    cols = floor(width / size);
    rows = floor(height / size);

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < rows; i++) {
            grid.push(new Cell(i, j));
        }
    }

    current = grid[0];
}


function draw() {

    background(0);

    for (cell of grid) {
        cell.show();
    }
    if(current){
        current.visited = true;
        current.highlight();
    
        let next = current.getRandomUnvisitedNeighbor();
        if (next) {
            next.visited = true;
            stack.push(current);
            removeWalls(current, next);
            current = next;
        } else {
            current = stack.pop();
        }
    }
}

function removeWalls(current, next) {
    let x = current.i - next.i;
    let y = current.j - next.j;

    if (x == 1) {
        current.walls[3] = false;
        next.walls[1] = false;
    } else if (x == -1) {
        current.walls[1] = false;
        next.walls[3] = false;
    }
    if (y == 1) {
        current.walls[0] = false;
        next.walls[2] = false;
    } else if (y == -1) {
        current.walls[2] = false;
        next.walls[0] = false;
    }
}

function index(i, j) {
    if (i < 0 || i > cols - 1 || j < 0 || j > rows) {
        return -1
    } else {
        return i + j * cols;
    }
}