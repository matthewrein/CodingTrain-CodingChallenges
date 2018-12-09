let width = 400;
let height = 300;

let gravity;

let fireworks = [];
let count;

function setup() {
    createCanvas(width, height);
    gravity = createVector(0, 0.2);
    count = 100;
    stroke(255);
    strokeWeight(4);

    fireworks.push(new Firework(random(width), height));
}


function draw() {
    colorMode(RGB);
    background(0,25);
    if (random(1) < 0.025){
    fireworks.push(new Firework(random(width), height));

    }
    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].firework.forDestroy) {
            fireworks.splice(i, 1);
        }

    }

}