let width = 1200;
let height = 800;

let increment = .5;
let scl = 20;
let cols, rows;

let zOff = 0;

let fr;

let particles = [];
let flowfield = [];

let m = 0.5;
function setup() {
    createCanvas(width, height);
    cols = floor(width / scl);
    rows = floor(height / scl);
    fr = createP('');

    flowfield = new Array(cols * rows);

    for(let i = 0; i < 5000; i++){
        particles[i] = new Particle();
    }
    background(0);

}


function draw() {

    let yOff = 0;
    for (let y = 0; y < rows; y++) {
        let xOff = 0;
        for (let x = 0; x < cols; x++) {
            let index = (x + y * cols);
            let angle = noise(xOff, yOff, zOff) * TWO_PI;
            let v = p5.Vector.fromAngle(angle);
            v.setMag(m);
            flowfield[index] = v;

            // strokeWeight(1);
            // stroke(255, 50);
            // push();
            // translate(x * scl, y * scl);
            // rotate(v.heading());
            // line(0,0,scl,0);
            // pop();
            xOff += increment;
        }
        yOff += increment;
    }
    zOff += 0.00005;

    fr.html(floor(frameRate()));

    for(let i = 0; i < particles.length; i++){
        particles[i].follow(flowfield);
        particles[i].show();
        particles[i].update();
    }
}