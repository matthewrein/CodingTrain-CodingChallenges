let width = 400;
let height = 400;

let walls = [];
let ray;
let particle;

let xoff = 0;
let yoff = 1000;

function setup(){
    createCanvas(width,height);
    for(let i=0; i < 5; i++){
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1,x2,y1,y2);
    }


    walls.push(new Boundary(0,0,width,0));
    walls.push(new Boundary(width,0,width,height));
    walls.push(new Boundary(width,height,0,height));
    walls.push(new Boundary(0,height,0,0));

    particle = new Particle();
}


function draw(){
    background(0);

    for(let wall of walls) {
        wall.show();
    }
    particle.update(noise(xoff)*width, noise(yoff) * height);
    particle.show();
    particle.look(walls);

    xoff += 0.02;
    yoff += 0.02;
    // ray.show();
    // ray.lookAt(mouseX, mouseY);

    // let pt = ray.cast(wall);
    // if (pt) {
    //     fill(255);
    //     ellipse(pt.x,pt.y,8,8);
    // }
}