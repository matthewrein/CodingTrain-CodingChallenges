let width = 800;
let height = 400;

let maxDist = 50;
let minDist = 10;
let tree;

function setup() {
    createCanvas(width, height);
    tree = new Tree();
}


function draw() {
    background(51);

    tree.show();
    tree.grow();
}
