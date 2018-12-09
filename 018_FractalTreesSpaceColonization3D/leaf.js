class Leaf{
    constructor(){
        this.pos =  createVector(random(width/3, 2 * width/ 3),random(height/ 6,height / 3), random(-width/3,width/3));
        this.reached = false;
    }

    show(){
        fill(255);
        stroke(255);
        //translate(this.pos.x, this.pos.y, this.pos.z)
        point(this.pos.x, this.pos.y, this.pos.z);
    }
}