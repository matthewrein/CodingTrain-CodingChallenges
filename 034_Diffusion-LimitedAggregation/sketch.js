let width = 800;
let height = 800;


let tree = [];
let walkers = [];
//let r = 5;

let walkerCount = 10;
let iterations = 100000;

function setup(){
    createCanvas(width,height);

    colorMode(HSB);

    tree[0] = new Walker(width/2, height/2);
    for(let i = 0; i < walkerCount; i++){
        walkers[i] = new Walker();
    }
}


function draw(){
    background(0);

    let walker = createVector(random(width),random(height));

    let stuck = false;

    for(branch of tree){
        branch.show();
    }

    // for(walker of walkers){
    //     walker.show();
    // }
    for(let n = 0; n < iterations; n++){
        for(let i = walkers.length -1; i >=0; i--){
            walkers[i].walk();
            if(walkers[i].checkStuck(tree)){
                let newR = walkers[i].r * 0.99;
                tree.push(walkers[i]);
                walkers.splice(i,1)
                walkers.push(new Walker(null,null,null, newR));
            }
        }
    }

}