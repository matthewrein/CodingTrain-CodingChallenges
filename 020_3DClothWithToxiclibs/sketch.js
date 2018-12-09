let width = 800;
let height = 800;

let particles = [];
let pCols = 40;
let pRows = 40;
let springs = [];

let w = 10;

let physics;

function setup() {
    createCanvas(width, height);

    physics = new toxi.physics2d.VerletPhysics2D();
    let gravity = new toxi.geom.Vec2D(0, 1);
    let gb = new toxi.physics2d.behaviors.GravityBehavior(gravity);
    physics.addBehavior(gb);

    let x = 200;
    let y = 10;

    for (let i = 0; i < pCols; i++) {
        particles[i] = [];
        for (let j = 0; j < pRows; j++) {
            let p = new Particle(x, y);
            particles[i][j] = p;
            physics.addParticle(p);
            y += w;
        }
        y = 10;
        x += w;
    }

    for (let i = 0; i < pCols - 1; i++) {
        for (let j = 0; j < pRows - 1; j++) {
            let a = particles[i][j];
            let b1 = particles[i+1][j];
            let b2 = particles[i][j+1];
            let b3 = particles[i+1][j+1];

            let s1 = new Spring(a, b1, w, 0.8);
            let s2 = new Spring(a, b2, w, 0.8);
            let s3 = new Spring(a, b3, w, 0.8);
            springs.push(s1);
            physics.addSpring(s1);
            springs.push(s2);
            physics.addSpring(s2);
            // springs.push(s3);
            // physics.addSpring(s3);
        }
    }

    particles[0][0].lock();
    particles[pCols - 1][0].lock();
}


function draw() {
    background(0);
    physics.update();
    // for (let i = 0; i < pCols; i++) {
    //     for (let j = 0; j < pRows; j++) {
    //         particles[i][j].display();
    //     }
    // }
    for (spring of springs) {
        spring.display();
    }
}