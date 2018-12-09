class Box {
    constructor(x, y, z, size) {
        this.position = createVector(x,y,z);
        this.size = size;
    }

    generate(){
        let boxes = [];
        for(let x = -1; x < 2; x++){
            for(let y = -1; y < 2; y++){
                for(let z = -1; z < 2; z++){
                    let newSize = this.size/3;
                    let newBox = new Box(this.position.x + x * newSize,this.position.y + y * newSize,this.position.z + z * newSize, newSize);
                    if(Math.abs(x) + Math.abs(y) + Math.abs(z) > 1){
                        boxes.push(newBox);
                    }
                }
            }
        }
        return boxes;
    }

    show(){
        push();
        translate(this.position.x, this.position.y, this. position.z);
        box(this.size);
        pop();
    }
}