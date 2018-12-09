class Walker {
    constructor(x,y,stuck, r) {
        if(x && y){
            this.pos = createVector( x, y);
        } else {
            this.pos = this.randomPoint();
        }
        this.stuck = stuck;
        this.r = r || 8;
    }

    randomPoint(){
        let i = floor(random(4));
        let x = random(width);
        let y = random(height);
        switch(i){
            case 0:
                y = 0;
            break;
            case 1:
                y = height;
            break;
            case 2:
                x = 0;
            break;
            case 3:
                x = width;
            break;
        }
        return createVector(x,y);
    }

    walk() {
        let vel = p5.Vector.random2D();
        this.pos.add(vel);
        this.pos.x = constrain(this.pos.x, 0, width);
        this.pos.y = constrain(this.pos.y, 0, width);
    }

    checkStuck(others) {
        // while(!stuck){
        for (let other of others) {
            let d = this.distSq(this.pos, other.pos);
            if (d < this.r * this.r * 4) {
                if(random(1) < 0.1){
                    this.stuck = true;
                    break;
                }
            }
        }
        // }
        return this.stuck;
    }

    show(){
        // if(this.stuck){
        //     fill(255,0,255,200);
        // } else {
        //     fill(255);
        // }
        noStroke();
        let hu = map(this.r, 0,8,0,360);
        fill(hu,255,255);
        ellipse(this.pos.x,this.pos.y,  this.r*2, this.r*2);
    }

    distSq(a,b){
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        return dx * dx + dy * dy;
    }
}