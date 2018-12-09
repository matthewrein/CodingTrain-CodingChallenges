class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true];

        this.visited = false;
    }

    getRandomUnvisitedNeighbor() {
        let neighbors = [];

        let top = grid[index(this.i, this.j - 1)];
        let right = grid[index(this.i + 1, this.j)];
        let bottom = grid[index(this.i, this.j + 1)];
        let left = grid[index(this.i - 1, this.j)];

        if(top && !top.visited){
            neighbors.push(top);
        }
        if(right && !right.visited){
            neighbors.push(right);
        }
        if(bottom && !bottom.visited){
            neighbors.push(bottom);
        }
        if(left && !left.visited){
            neighbors.push(left);
        }

        if(neighbors.length > 0){
            let r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else {
            return undefined;
        }
    }

    highlight(){
        let x = this.i * size;
        let y = this.j * size;
        noStroke();
        fill(0,255,0);
        rect(x,y,size,size);
    }

    show() {
        let x = this.i * size;
        let y = this.j * size;

        stroke(255);
        if (this.walls[0]) {
            line(x, y, x + size, y);
        }
        if (this.walls[1]) {
            line(x + size, y, x + size, y + size);
        }
        if (this.walls[2]) {
            line(x + size, y + size, x, y + size);
        }
        if (this.walls[3]) {
            line(x, y + size, x, y);
        }

        if (this.visited) {
            fill(0, 255, 0, 100);
            noStroke();
            rect(x, y, size, size);
        }
    }
}