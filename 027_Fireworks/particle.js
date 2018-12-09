class Particle {
    constructor(x,y,hu, isFirework){
        this.pos = createVector(x,y);
        this.hu = hu;
        this.isFirework = isFirework;
        this.lifespan = 255;
        this.forDestroy = false;
        this.weight = random(.7,.9);
        this.lifespanRate = random(3,4);
        if(this.isFirework){
            this.vel = createVector(0,random(-12,-8));
        } else{
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(1,5));
        }
        this.acc = createVector(0,0);
    }

    applyForce(force){
        this.acc.add(force);
    }

    update(){
        if(!this.isFirework){
            this.vel.mult(this.weight);
            this.lifespan -= this.lifespanRate;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);

        if(this.lifespan <= 0 || this.pos.y > height + 10){
            this.forDestroy = true;
        }
    }

    show(){
        colorMode(HSB);

        if(!this.isFirework){
            strokeWeight(2);
            stroke(this.hu,255,255,this.lifespan);
        } else{
            strokeWeight(4);
            stroke(this.hu,255,255,this.lifespan);        
        }
        point(this.pos.x,this.pos.y);
    }
}
