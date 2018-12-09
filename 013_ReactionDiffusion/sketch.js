let width = 200;
let height = 200;

let grid;
let next;

let dA = 1;
let dB = 0.5;
let fd = 0.055;
let k = 0.062;

let dT = 1;

function setup() {
    createCanvas(width, height);
    pixelDensity(1);

    grid = [];
    next = [];
    for (let x = 0; x < width; x++) {
        grid[x] = [];
        next[x] = [];
        for (let y = 0; y < height; y++) {
            grid[x][y] = { a: 1, b: 0 };
            next[x][y] = { a: 1, b: 0 };
        }
    }

    for (let x = 90; x < 110; x++) {
        for (let y = 90; y < 110; y++) {
            grid[x][y].b = 1
        }
    }
}


function draw() {
    background(51);

    for (let x = 1; x < width - 1; x++) {
        for (let y = 1; y < height - 1; y++) {
            // next[x][y].a = grid[x][y].a * 0.99;
            // next[x][y].b = grid[x][y].b * 0.89;
            let a = grid[x][y].a
            let b = grid[x][y].b
            next[x][y].a = a + (dA * laplaceA(x, y) - (a * b * b) + fd * (1 - a)) * dT;
            next[x][y].b = b + (dB * laplaceB(x, y) + (a * b * b) - (k + fd) * b) * dT;
        }
    }

    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let c = color(255, 0, 100);
            let p = 4 * (x + y * width);
            pixels[p + 0] = floor(255 * next[x][y].a);
            pixels[p + 1] = floor(255 * next[x][y].a);
            pixels[p + 2] = floor(255 * next[x][y].a);
            pixels[p + 3] = floor(255 * next[x][y].b);
        }
    }
    updatePixels();

    swap();
}


function swap() {
    let temp = grid;
    grid = next;
    next = temp;
}

function laplaceA(x, y) {
    let sum = 0;
    sum += grid[x][y].a * -1;
    sum += grid[x - 1][y].a * .2;
    sum += grid[x + 1][y].a * .2;
    sum += grid[x][y - 1].a * .2;
    sum += grid[x][y + 1].a * .2;
    sum += grid[x - 1][y - 1].a * .05;
    sum += grid[x - 1][y + 1].a * .05;
    sum += grid[x + 1][y - 1].a * .05;
    sum += grid[x + 1][y + 1].a * .05;
    return sum;
}

function laplaceB(x, y) {
    let sum = 0;
    sum += grid[x][y].b * -1;
    sum += grid[x - 1][y].b * .2;
    sum += grid[x + 1][y].b * .2;
    sum += grid[x][y - 1].b * .2;
    sum += grid[x][y + 1].b * .2;
    sum += grid[x - 1][y - 1].b * .05;
    sum += grid[x - 1][y + 1].b * .05;
    sum += grid[x + 1][y - 1].b * .05;
    sum += grid[x + 1][y + 1].b * .05;
    return sum;
}