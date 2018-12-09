let width = 800;
let height = 800;

let resolution = 50;
let r = 50;

let easycam;

let sphereVertices = [];

let m = 0;

function setup() {
    createCanvas(width, height, WEBGL);
    createEasyCam()
    Dw.EasyCam.prototype.apply = function (n) {
        var o = this.cam;
        n = n || o.renderer,
            n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))
    };
    easycam = new Dw.EasyCam();


}

let mChange = 0;
function draw() {
    background(0);

    fill(255);

    directionalLight(255, 255, 255, 0, 0, -1);

    m = map(sin(mChange), -1,1, 0, 7);
    mChange += 0.005;
    sphereVertices = [];
    for (let i = 0; i < resolution + 1; i++) {
        sphereVertices[i] = [];
        let lat = map(i, 0, resolution, -HALF_PI, HALF_PI);

        let r2 = supershape(lat, m, 0.2, 1.7, 1.7);
        // let r2 = supershape(lat, 2, 10, 10, 10);

        for (let j = 0; j < resolution + 1; j++) {
            let lon = map(j, 0, resolution, -PI, PI);

            let r1 = supershape(lon, m, 0.2, 1.7, 1.7);
            // let r1 = supershape(lon, 8, 60, 100, 30);

            let x = r * r1 * cos(lon) * r2 * cos(lat);
            let y = r * r1 * sin(lon) * r2 * cos(lat);
            let z = r * r2 * sin(lat);



            sphereVertices[i].push(createVector(x, y, z));
        }
    }
    // sphere(200);

    for (let i = 0; i < resolution; i++) {
        if (i % 2 == 0) {
            fill(255, 255, 0);
        } else {
            fill(0, 255, 255);
        }
        beginShape(TRIANGLE_STRIP);
        for (let j = 0; j < resolution + 1; j++) {
            let v = sphereVertices[i][j];
            let v1 = sphereVertices[i + 1][j];
            // stroke(255);
            // noFill();
            noStroke();
            vertex(v.x, v.y, v.z);
            vertex(v1.x, v1.y, v1.z);
        }
        endShape();
    }
}

function supershape(angle, m, n1, n2, n3) {

    let a = 1;
    let b = 1;

    let t1 = abs((1 / a) * cos(m * angle / 4));
    t1 = pow(t1, n2)

    let t2 = abs((1 / b) * sin(m * angle / 4));
    t2 = pow(t2, n3);

    t3 = t1 + t2;
    let r = pow(t3, -1 / n1);

    return r;
}