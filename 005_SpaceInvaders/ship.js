class Ship{
    constructor(){
        this.x = width/2;
        this.y = height - 22;
        this.xDir = 0;
    }

    show(){
        fill(255);
        rectMode(CENTER);
        rect(this.x,  this.y, 20,20);
    }

    move(dir){
        this.x += this.xDir * 5;
    }

    setDir(dir){
        this.xDir = dir;
    }
}