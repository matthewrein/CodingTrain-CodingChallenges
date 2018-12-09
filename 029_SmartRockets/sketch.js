let width = 400;
let height = 300;

let rocket;
let population;
let lifespan = 400;
let lifeP;
let count = 0;
let generation = 0;

let target;

let maxForce = .2;
let maxVelocity = .4;

let rx = 100, ry = 150, rw = 200, rh = 10;

function setup(){
    createCanvas(width,height);
    population = new Population();
    lifeP = createP();

    target = createVector(width/2, 50);
}


function draw(){
    background(0);
    population.run();

    lifeP.html(generation);
    count++;

    if(count == lifespan){
        population.evaluate();
        population.selection();
        count = 0;
        generation += 1;
    }

    fill(255);
    rect(rx,ry,rw,rh);

    ellipse(target.x, target.y, 16,16);
}