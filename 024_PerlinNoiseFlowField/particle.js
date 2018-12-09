class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.maxSpeed = 2;

        this.prevPos = this.pos.copy();
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.edges();
    }

    applyForce(force) {
        this.acc.add(force);
    }

    show() {
        strokeWeight(1);
        stroke(255, 20);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.prevPos = this.pos.copy();
    }


    updatePrev(){
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    edges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }

    }

    follow(flowfield) {
        let x = floor(this.pos.x / scl);
        let y = floor(this.pos.y / scl);

        let index = x + y * cols;
        let force = flowfield[index];
        this.applyForce(force);
    }
}