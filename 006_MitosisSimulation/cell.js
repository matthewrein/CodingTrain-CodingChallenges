class Cell {
    constructor(p, r, c) {
        this.p = p ? p.copy() : createVector(random(width/4,3 * width / 4), random(height/4,3 * height / 4));
        this.r = r || 100;
        this.c = c || color(random(100, 255), 0, random(100, 255), random(100,255));
    }

    move() {
        let v = p5.Vector.random2D();
        this.p.add(v);
    }

    show() {
        fill(this.c);
        noStroke();
        ellipse(this.p.x, this.p.y, this.r, this.r);
    }

    clicked(x, y) {
        let d = dist(this.p.x, this.p.y, x, y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }

    mitosis(){
        let a = Math.random() * Math.PI * 2;
        let newP = createVector(Math.cos(a)*this.r/2, Math.sin(a)*this.r/2);
        let cell = new Cell(newP.add(this.p), this.r*0.9, this.c);
        return  cell;
    }
}