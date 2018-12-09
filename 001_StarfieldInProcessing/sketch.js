let width = 800;
let height = 800;

let stars = [];
let speed;

function setup(){
    createCanvas(width,height);
    for(let i= 0; i < 800; i++){
        stars.push(new Star());
    }
}


function draw(){
    speed = map(mouseY, 0, height, 0,50);
    background(0);
    translate( width/2, height/2);
    for(star of stars){
        star.update();
        star.show();
    }
}