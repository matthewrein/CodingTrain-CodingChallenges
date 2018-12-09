let width = 600;
let height = 600;

let maxDist = 200;
let minDist = 10;
let tree;
let leafCount= 100;

let angle = 0;

function setup() {
    createCanvas(width, height, WEBGL);

    tree = new Tree();
}


function draw() {
    background(51);
    rotateY(angle+=0.01);
    translate(-width/2,-height/2,0);
    tree.show();
    tree.grow();
}
