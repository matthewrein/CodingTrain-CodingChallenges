class Rocket{
    constructor(dna){
        this.pos = createVector(width/2, height);
        this.vel = createVector();
        this.acc = createVector();
        this.dna = dna || new DNA();
        this.fitness;
        this.crashed = false;
        this.completed = false;
    }

    applyForce(force){
        this.acc.add(force);
    }

    calculateFitness(){
        let d = dist(this.pos.x, this.pos.y, target.x, target.y);
        this.fitness = map(d, 0, width, width, 0);
        if(this.completed){
            this.fitness * 10;
        }
        if(this.crashed){
            this.fitness /= 20;
        }
    }

    update(){

        let d = dist(this.pos.x, this.pos.y, target.x, target.y);
        if (d < 10){
            this.completed = true;
            this.pos = target.copy();
        }

        if(this.pos.x > rx && this.pos.x < rx + rw && this.pos.y > ry && this.pos.y < ry + rh){
            this.crashed = true;
        }
        if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
            this.crashed = true;
        }

        this.applyForce(this.dna.genes[count]);
        if(!this.completed && !this.crashed){
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
            this.vel.limit = maxVelocity;
        }
    }

    show(){
        push();
        noStroke();
        fill(255,100);
        translate(this.pos.x,this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        ellipse(0,0, 25,5);
        pop();
    }
}