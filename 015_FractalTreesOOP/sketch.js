let width = 400;
let height = 400;

let tree = [];
let count = 0;
let leaves = [];

function setup() {
    createCanvas(width, height);
    let a = createVector(width / 2, height);
    let b = createVector(width / 2, height - 100);
    root = new Branch(a, b);
    tree[0] = root;


}


function draw() {
    background(51);
    for(branch of tree){
        branch.show();
        // branch.jitter();

        for(leaf of leaves){
            fill(255,0,100, 100);
            ellipse(leaf.x,leaf.y, 5,5);
        }
    }
}

function mousePressed(){
    for(let i = tree.length - 1; i >= 0; i--){
        if(!tree[i].finished){
            tree.push(tree[i].branch(1));
            tree.push(tree[i].branch(-1));
            tree[i].finished = true;
        }
    }
    count++;

    if(count === 6){
        for(let i = 0; i < tree.length; i++){
            if(!tree[i].finished){
                let leaf = tree[i].end.copy();
                leaves.push(leaf);
            }
        }
    }
}
