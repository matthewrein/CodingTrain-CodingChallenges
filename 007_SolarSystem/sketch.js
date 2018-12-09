let width = 800;
let height = 800;

let sun;

let sunTexture;
let textures = [];

function setup() {
    createCanvas(width, height, WEBGL);

    sunTexture = loadImage('sun.jpg');
    textures.push(loadImage('mars.jpg'));
    textures.push(loadImage('earth.jpg'));
    textures.push(loadImage('mercury.jpg'));

    sun = new Planet(100, 0, 0, sunTexture);
    sun.spawnMoons(4, 3);
}


function draw() {
    background(0);

    //translate(width / 2, height / 2);
    sun.orbit();
    sun.show();
}