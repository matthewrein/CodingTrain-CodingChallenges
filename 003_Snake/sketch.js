let width = 800;
let height = 800;
let s;
let scl = 20;

let f;

function setup(){
    createCanvas(width,height);
    s = new Snake(0,0);
    frameRate(10);
    f = new Food(pickLocation());
}


function draw(){
    background(51);
    s.death();
    s.update();
    s.show();
    f.show();

    if(s.eat(f)){
        f = new Food(pickLocation());
    }
}

function pickLocation(){
    let cols = floor(width/scl);
    let rows = floor(height/scl);
    let v = createVector(floor(random(cols)) * scl, floor(random(rows)) * scl);
    return v;
}

function keyPressed(){
    if (keyCode === UP_ARROW){
        s.dir(0,-1);
    } else if (keyCode === DOWN_ARROW){
        s.dir(0,1);
    } else if (keyCode === RIGHT_ARROW){     
        s.dir(1,0);
    } else if (keyCode === LEFT_ARROW){
        s.dir(-1,0);        
    }
}