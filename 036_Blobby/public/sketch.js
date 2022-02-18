let width = 800;
let height = 800;

let socket;

let blobs = [];
let zoom = 1;

function setup() {
    createCanvas(width, height);

    socket = io.connect('http://localhost:3000');

    blob = new Blob(64, random(width), random(height));
    // for (let i = 0; i < 500; i++) {
    //     blobs[i] = new Blob(16, random(-2* width, 2* width), random(- 2*height, 2*height));
    // }

    let data = {
        x: blob.pos.x,
        y: blob.pos.y,
        r: blob.r
    };

    socket.emit('start', data);
}


function draw() {
    background(0);

    translate(width / 2, height / 2);
    let newScale = 64 / blob.r;
    zoom = lerp(zoom, newScale, 0.1);
    scale(zoom);
    translate(-blob.pos.x, -blob.pos.y);

    blob.show();

    if(mouseIsPressed){
        blob.update();
        blob.constrain();
    }


    let data = {
        x: blob.pos.x,
        y: blob.pos.y,
        r: blob.r
    };

    socket.emit('update', data);

    socket.on('heartbeat', function (data) {
        // console.log(data);
        blobs = data;
    });

    for (let i = 0; i < blobs.length; i++) {
        if(blobs[i].id != socket.id){
            fill(0,255,0);
            ellipse(blobs[i].x, blobs[i].y, blobs[i].r * 2, blobs[i].r * 2);
    
            fill(255);
            textAlign(CENTER);
            text(blobs[i].id,blobs[i].x, blobs[i].y + blobs[i].r * 1.5);
        }

    }
}