class Star {
    constructor() {
        this.x = -width / 2 + Math.floor(Math.random() * width);
        this.y = -height / 2 + Math.floor(Math.random() * height);
        this.z = Math.floor(Math.random() * width);

        this.size = 8;


        this.pz = this.z;

    }

    update() {
        this.z -= speed;
        if (this.z < 1) {
            this.z = width;
            this.x = -width / 2 + Math.floor(Math.random() * width);
            this.y = -height / 2 + Math.floor(Math.random() * height);
            this.pz = this.z;
        }
    }

    show() {
        fill(255);
        noStroke();

        let sx = map(this.x / this.z, 0, 1, 0, width);
        let sy = map(this.y / this.z, 0, 1, 0, height);
        let sz = map(this.z, 0, width, this.size * 2, 0)

        //ellipse(sx, sy, sz, sz);

        let px = map(this.x / this.pz, 0, 1, 0, width)
        let py = map(this.y / this.pz, 0, 1, 0, height)

        this.pz = this.z;
        stroke(255);
        line(px, py, sx, sy);

    }
}