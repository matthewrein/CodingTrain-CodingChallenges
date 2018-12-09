class Drop {
    constructor() {
        this.x = random(width);
        this.y = random(-height, height / 2);
        this.z = random(0,20);
        this.ySpeed = map(this.z,0,20,1,20);
        this.gravity = map(this.z,0,20,0.05,0.2);
        this.length = map(this.z, 0, 20, 10,20);
    }

    fall() {
        this.y += this.ySpeed;
        this.ySpeed += this.gravity;
        if (this.y > height) {
            this.y = random(-200,-100);
            this.ySpeed = map(this.z,0,20,4,10);
        }
    }


    show() {
        stroke(138, 43, 226);
        let thickness = map(this.z,0,20,.5,2.5);
        strokeWeight(thickness);
        line(this.x, this.y, this.x, this.y + this.length);
    }
}