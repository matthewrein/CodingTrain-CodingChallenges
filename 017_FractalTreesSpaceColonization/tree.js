class Tree {
    constructor() {
        this.leaves = [];
        this.branches = [];

        for (let i = 0; i < 500; i++) {
            this.leaves.push(new Leaf());
        }

        let pos = createVector(width / 2, height);
        let dir = createVector(0, -1);
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
        console.log('growing');
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
                branch.dir.div(branch.count + 1);
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
            this.branches[i].show();
        }
    }
}