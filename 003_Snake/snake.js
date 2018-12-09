class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.tail = [];
        this.total = 0;
    }

    update() {
        if(this.total === this.tail.length){
            for(let i = 0; i < this.tail.length-1; i++){
                this.tail[i] = this.tail[i + 1];
            }
        }

        this.tail[this.total-1] = createVector(this.x, this.y);

        this.x += this.xSpeed * scl;
        this.y += this.ySpeed * scl;

        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }

    show() {
        fill(255);
        rect(this.x, this.y, scl, scl);

        for(let i = 0; i < this.tail.length; i++){
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
    }

    dir(x, y) {
        if(this.xSpeed != -x){
            this.xSpeed = x;
        }
        if(this.ySpeed != -y){
            this.ySpeed = y;
        }
    }

    eat(food){
        let d = dist(this.x,this.y, food.x, food.y);
        if(d < 1){
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    death(){
        for(let i = 0; i < this.tail.length; i++){
            let pos = this.tail[i];
            let d = dist(this.x, this.y, pos.x, pos.y)
            if(d < 1){
                this.total = 0;
                this.tail = [];
            }
        }
    }
}