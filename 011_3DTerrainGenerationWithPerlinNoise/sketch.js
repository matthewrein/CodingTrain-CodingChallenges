let width = 800;
let height = 800;
let scl = 20;

let cols, rows;
let w = 1200;
let h = 1200;

let terrain = [];
let flying = 0;

function setup() {
    createCanvas(width, height, WEBGL);
    cols = w / scl;
    rows = h / scl;
}


function draw() {
    background(0);
    translate(- w / 2, -h/2,- height / 4);
    rotateX(PI /4);

    flying -= 0.1;
    let yOffset = flying;
    terrain = [];
    for (let y = 0; y < rows; y++) {
        let xOffset = 0;
        let row = [];
        for (let x = 0; x < cols; x++) {
            row.push(map(noise(xOffset,yOffset), 0,1, -100,100));      
            xOffset += 0.1;     
        }
        terrain.push(row);
        yOffset += 0.1;     
    }

    stroke(255);
    noFill();
    for (let y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[y][x]);
            vertex(x * scl, (y + 1) * scl, terrain[y + 1][x]);

            // vertex(x * scl, y* scl);
            // vertex(x * scl, (y + 1)* scl);
            // vertex((x + 1) * scl, y * scl);
            // vertex(x * scl, y* scl);
            // rect(x * scl, y * scl, scl, scl);
        }
        endShape();
    }

}