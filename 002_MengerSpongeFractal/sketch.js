let width = 800;
let height = 800;

let angle = 0;

let b;
let sponge = [];

function setup(){
    createCanvas(width,height, WEBGL);
    b = new Box(0,0,0,width/2);
    sponge.push(b);
}

function mousePressed(){
    let next = [];
    for(s of sponge){
        let newSponges = s.generate();
        next = next.concat(newSponges);
    }
    sponge = next;
}

function draw(){
    background(51);
    noStroke();
    fill(255);
	directionalLight(255, 255, 255, -1, -1, -1);

    rotateX(angle);
    rotateY(angle *.04);
    rotateZ(angle * .2);
    for(s of sponge){
        s.show();
    }

   angle += 0.01;
}