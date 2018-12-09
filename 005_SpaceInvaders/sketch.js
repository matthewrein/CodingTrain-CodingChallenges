let width = 600;
let height = 400;

let flowers = [];
let water = [];
let ship;

function setup(){
    createCanvas(width,height);
    ship = new Ship();
    for(let i = 0; i < 6; i++){
        flowers.push(new Flower(i*80+100, 50));
    }
}


function draw(){
    background(51);
    ship.move();

    let edge = false;
    for(flower of flowers){
        flower.move();
        flower.show();
        if(flower.x > width || flower.x < 0){
            edge = true;
        }
    }
    if(edge){
        for(flower of flowers){
            flower.shiftDown();
        }
    }

    for(var d = water.length - 1; d >= 0; d--){
        if(water[d].destroy){
            water.splice(d,1);
        } else {
            water[d].move();
            water[d].show();
            for(flower of flowers){
                if(water[d].hits(flower)){
                    flower.grow();
                }
            }
        }
    }
    ship.show();
}

function keyReleased(){
    if(keyCode !== 32){
        ship.setDir(0);
    }
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW){
        ship.setDir(-1);
    }

    if(keyCode === 32){
        water.push(new Drop(ship.x,ship.y))
    }
}