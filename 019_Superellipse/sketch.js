let width = 400;
let height = 400;
let sliderA;
let sliderB;
let sliderN;

function setup() {
    createCanvas(width, height);
    sliderA = createSlider(0,500,100,1);
    sliderB = createSlider(0,500,100,1);
    sliderN = createSlider(0,10,2,0.1);
}


function draw() {
    background(0);
    translate(width / 2, height / 2);
    let a = sliderA.value();
    let b = sliderB.value();
    let n = sliderN.value();

    stroke(255);
    noFill();
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += 0.1) {
        // let x = r * cos(a);
        // let y = r * sin(a);

        na = 2 / n;
        let x = pow(abs(cos(angle)), na) * a * sgn(cos(angle));
        let y = pow(abs(sin(angle)), na) * b * sgn(sin(angle));

        vertex(x, y);
    }
    endShape(CLOSE);
}

function sgn(val) {
    if (val > 0) {
        return 1;
    } else if (val < 0) {
        return -1
    } else {
        return 0;
    }
}