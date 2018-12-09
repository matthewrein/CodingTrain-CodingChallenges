let width = 800;
let height = 800;

let r = 4;
let k = 30;

let grid = [];
let w;
let cols;
let rows;
let active = [];

function setup() {
    createCanvas(width, height);

    background(0);
    strokeWeight(1);

    w = r / sqrt(2)

    cols = floor(width / w);
    rows = floor(height / w);
    for (let i = 0; i < cols * rows; i++) {
        grid[i] = undefined;
    }

    let pos = createVector(random(width), random(height))
    let i = floor(pos.x / w);
    let j = floor(pos.y / w);
    grid[i + j * cols] = pos;
    active.push(pos);

}


function draw() {
    background(0);

    for (let t = 0; t < 50; t++) {
        if (active.length > 0) {
            let randIndex = floor(random(active.length));
            let pos = active[randIndex];
            let found = false;
            for (let n = 0; n < k; n++) {
                let sample = p5.Vector.random2D();
                sample.setMag(random(r, 2 * r));
                sample.add(pos);

                let col = floor(sample.x / w);
                let row = floor(sample.y / w);

                if (col >= 0 && row >= 0 && col < cols && row < rows && !grid[col + row * cols]) {


                    let valid = true;
                    for (let i = -1; i <= 1; i++) {
                        for (let j = -1; j <= 1; j++) {
                            let index = (col + i) + (row + j) * cols;
                            let neighbor = grid[index];
                            if (neighbor) {
                                let d = p5.Vector.dist(sample, neighbor);
                                if (d < r) {
                                    valid = false;
                                    break;
                                }
                            }
                        }
                    }
                    if (valid) {
                        found = true;
                        grid[col + row * cols] = sample;
                        active.push(sample);
                        // break;
                    }
                }

            }
            if (!found) {
                active.splice(randIndex, 1);
            }
        }

    }

    for (let i = 0; i < grid.length; i++) {
        if (grid[i]) {
            stroke(255);
            strokeWeight(1);
            point(grid[i].x, grid[i].y);
        }
    }
    for (let i = 0; i < active.length; i++) {
        stroke(255, 0, 255);
        strokeWeight(1);
        point(active[i].x, active[i].y);
    }
}