let width = 1200;
let height = 400;
let numberOfDrops = 500;
let drops = [];

function setup() {
    createCanvas(width, height);
    for (let d = 0; d < numberOfDrops; d++) {
        drops.push(new Drop());
    }
}


function draw() {
    background(230, 230, 250);
    for (d of drops) {

        d.fall();
        d.show();
    }
}