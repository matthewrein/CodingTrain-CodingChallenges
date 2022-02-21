let width = 800;
let height = 800;

function setup(){
    createCanvas(width,height);
    angleMode(DEGREES);
}


function draw(){
    background(0);

    translate(width/2, height/2)
    rotate(-90);

    let hh = hour();
    let mm = minute();
    let ss = second();

    // fill(255);
    // noStroke();
    // text(`${hh}:${mm}:${ss}`, 10, 200);

    let ssEnd = map(ss, 0,59,0,360);
    let mmEnd = map(mm, 0,59,0,360);
    let hhEnd = map(hh % 12, 0,12, 0,360);

    push();
    rotate(ssEnd);
    strokeWeight(4);
    stroke(255,100,150);
    line(0,0,200,0);
    pop();

    push();
    rotate(mmEnd);
    stroke(25,100,240);
    line(0,0,150,0);
    pop();

    push();
    rotate(hhEnd);
    stroke(100,100,150);
    line(0,0,75,0);
    pop();

    strokeWeight(8);
    stroke(255,100,150);
    noFill();
    arc(0, 0, 600,600, 0, ssEnd);
    
    strokeWeight(8);
    stroke(25,100,240);
    noFill();
    arc(0, 0, 580,580, 0, mmEnd);
    
    strokeWeight(8);
    stroke(100,100,150);
    noFill();
    arc(0, 0, 560,560, 0, hhEnd);
}