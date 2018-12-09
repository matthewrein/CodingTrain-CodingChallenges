class Flower{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = 60;

        this.xDir = 1;
    }

    move(){
        this.x += this.xDir;
    }

    shiftDown(){
        this.xDir *= -1;
        this.y += this.size/2;
    }

    show(){
        noStroke();
        fill(255, 0, 200, 150);
        ellipse(this.x,  this.y, this.size,this.size);
    }

    grow(){
        this.size += 2;
    }
}
