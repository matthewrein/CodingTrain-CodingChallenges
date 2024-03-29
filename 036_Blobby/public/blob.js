class Blob {
    constructor(r, x, y) {
        this.pos = createVector(x, y);
        this.r = r;
        this.speed = 3;
        this.vel = createVector(0,0);

        this.yoff = 0;
    }

    update() {
        let newVel = createVector(mouseX - width / 2, mouseY - height / 2);
        newVel.setMag(this.speed);
        this.vel.lerp(newVel, 0.2);
        this.pos.add(this.vel);
    }

    eats(other) {
        let d = p5.Vector.dist(this.pos, other.pos);
        if (d < this.r + other.r) {
            let sum = PI * this.r * this.r + PI * other.r * other.r;
            this.r = sqrt(sum / PI );
            return true;
        }
        return false;
    }

    constrain(){
        this.pos.x = constrain(blob.pos.x, -width, width);
        this.pos.y = constrain(blob.pos.y, -height, height);
    }

    show() {
        // console.log(this.pos);
        // fill(255);
        // ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
        push();
        translate(this.pos.x, this.pos.y);
        beginShape();
        let xoff = 0;
        for(let a= 0; a < TWO_PI; a +=0.1){
            let offset = map(noise(xoff, this.yoff), 0, 1, -25, 25);
            let r = this.r + offset;
            let x = r * cos(a);
            let y = r * sin(a);
            vertex(x,y);
            xoff += 0.1;
        }
        endShape();
        pop();
        this.yoff += 0.01;
    }
}