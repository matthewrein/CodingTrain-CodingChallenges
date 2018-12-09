let width = 800;
let height = 800;

let resolution = 200;
let r = 200;

let easycam;

let sphereVertices = [];

function setup() {
    createCanvas(width, height, WEBGL);
    createEasyCam()
    Dw.EasyCam.prototype.apply = function(n) {
        var o = this.cam;
        n = n || o.renderer,
        n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))
      };
    easycam = new Dw.EasyCam();



    for (let i = 0; i < resolution + 1; i++) {
        sphereVertices[i] = [];
        let lat = map(i, 0, resolution, 0, PI);
        for (let j = 0; j < resolution + 1; j++) {
            let lon = map(j, 0, resolution, 0, TWO_PI);
            let x = r * sin(lat) * cos(lon);
            let y = r * sin(lat) * sin(lon);
            let z = r * cos(lat);
            sphereVertices[i].push(createVector(x,y,z));
        }
    }
}


function draw() {
    background(0);

    fill(255);

    directionalLight(255, 255, 255, 0, 0, -1);

    // sphere(200);

    for (let i = 0; i < resolution; i++) {
        if(i % 2 == 0){
            fill(255,255,0);
        } else {
            fill(0,255,255);
        }
        beginShape(TRIANGLE_STRIP);
        for (let j = 0; j < resolution + 1; j++) {
            let v = sphereVertices[i][j];
            let v1 = sphereVertices[i+1][j];
            // stroke(255);
            noStroke();
            vertex(v.x,v.y,v.z);
            vertex(v1.x,v1.y,v1.z);
        }
        endShape();
    }
}