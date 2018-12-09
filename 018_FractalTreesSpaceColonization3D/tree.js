class Tree {
    constructor() {
        this.leaves = [];
        this.branches = [];

        for (let i = 0; i < leafCount; i++) {
            this.leaves.push(new Leaf());
        }

        let pos = createVector(width / 2, height, 0);
        let dir = createVector(0, -1, 0);
        let root = new Branch(pos, dir, null);
        this.branches.push(root);

        let current = root;
        let found = false;
        while (!found) {
            for (let i = 0; i < this.leaves.length; i++) {
                let d = p5.Vector.dist(current.pos, this.leaves[i].pos);
                if (d < maxDist) {
                    found = true;
                }
            }

            if (!found) {
                let branch = current.next();
                current = branch;
                this.branches.push(current);
            }
        }

    }

    grow() {
        for (let i = 0; i < this.leaves.length; i++) {
            let leaf = this.leaves[i];

            let closestBranch = null;
            let record = Infinity;
            for (let j = 0; j < this.branches.length; j++) {
                let branch = this.branches[j];
                let d = p5.Vector.dist(leaf.pos, branch.pos);
                if (d < minDist) {
                    //closestBranch = null;
                    leaf.reached = true;
                    break;
                } else if (d > maxDist) {

                } else if (closestBranch == null || d < record) {
                    closestBranch = branch;
                    record = d;
                }
            }
            if (closestBranch != null) {
                let newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
                newDir.normalize();
                closestBranch.dir.add(newDir);
                closestBranch.count++;
            }
        }
        for (let i = this.leaves.length - 1; i >= 0; i--) {
            if (this.leaves[i].reached) {
                this.leaves.splice(i, 1);
            }
        }
        for (let i = this.branches.length -1 ; i >= 0 ; i--) {
            let branch = this.branches[i];
            if (branch.count > 0) {

                let randVector = p5.Vector.random3D();
                randVector.setMag(0.03);
                branch.dir.add(randVector);
                branch.dir.div(branch.count + 1);
                branch.dir.normalize();
                this.branches.push(branch.next());
            }
            branch.reset();
        }
    }

    show() {
        for (let i = 0; i < this.leaves.length; i++) {
            this.leaves[i].show();
        }
        for (let i = 0; i < this.branches.length; i++) {
            let sW = map(i, 0, this.branches.length, 10, 1);
            this.branches[i].show(sW);
        }
    }
}