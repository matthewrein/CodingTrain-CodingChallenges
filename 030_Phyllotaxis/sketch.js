let width = 800;
let height = 800;

let n = 0;
let aMod = 137.5; //137.5;
let c = 4;

function setup(){
    createCanvas(width,height);
    angleMode(DEGREES);
    colorMode(HSB);
    background(0);
}


function draw(){

    let a = n * aMod;
    let r = c * sqrt(n);

    let x = r * cos(a) + width / 2 ;
    let y = r * sin(a) + height / 2;

    fill((a - r) % 256,255,255);
    noStroke();
    ellipse(x,y,4,4)

    n++
}