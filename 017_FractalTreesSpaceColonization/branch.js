class Branch {
    constructor(pos, dir, parent) {
        this.pos = pos;
        this.parent = parent;
        this.dir = dir;
        this.originalDir = dir.copy();
        this.count = 0;
        this.len = 5;
    }

    reset() {
        this.dir = this.originalDir.copy();
        this.count = 0;
    }

    next() {
        let nextDir = p5.Vector.mult(this.dir, this.len);
        let nextPos = p5.Vector.add(this.pos, this.dir);
        let nextBranch = new Branch(nextPos, this.dir, this);
        return nextBranch;
    }

    show() {
        if (this.parent != null) {
            stroke(255);
            line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
        }
    }
}