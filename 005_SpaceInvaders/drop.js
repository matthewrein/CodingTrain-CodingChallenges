class Drop{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.size = 8;
        this.destroy = false;
    }

    show(){
        fill(50,0,200);
        ellipse(this.x,this.y,this.size,this.size);
    }

    move(){
        this.y -= this.speed;
        if(this.y < 0){
            this.markForDestruction();
        }
    }

    hits(flower){
        let d = dist(this.x, this.y, flower.x, flower.y);
        if(d < this.size / 2 + flower.size / 2){
            this.markForDestruction();
            return true;
        }else {
            return false;
        }
    }

    markForDestruction(){
        this.destroy = true;
    }
}