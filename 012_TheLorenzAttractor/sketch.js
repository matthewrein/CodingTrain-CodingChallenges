let width = 800;
let height = 800;

let x = 0.01;
let y = 0;
let z = 0;

let a = 11; //  10
let b = 28; //  28
let c = 8/3; //  8/3

let dt = 0.01;

let points = [];

let xAngle = 0;
let dXAngle = 0;

let yAngle = 0;
let dYAngle = 0.01;

let zAngle = 0;
let dZAngle = 0;

let dH = 0.01;

function setup(){
    createCanvas(width,height, WEBGL);
    colorMode(HSB, 100);
}


function draw(){
    background(0);

    rotateX(xAngle);
    xAngle += dXAngle;
    
    rotateY(yAngle);
    yAngle += dYAngle;

    rotateZ(zAngle);
    zAngle += dZAngle;
    
    scale(5);

    let dx = dt * (a * (y - x));
    let dy = dt * ( x * (b -z) - y);
    let dz = dt * (x * y - c * z);

    x += dx;
    y += dy;
    z += dz;

    points.push(createVector(x,y,z));

    // console.log(x,y,z);


    noFill();
    // beginShape();
    let h = 0;
    for(let i = 1; i < points.length; i++){
        strokeWeight(2);
        stroke(h, 255, 255);
        line(points[i].x,points[i].y, points[i].z, points[i-1].x,points[i-1].y, points[i-1].z);
        h += dH;
        if(h > 255){ h = 0;}
    }
    // endShape();
}