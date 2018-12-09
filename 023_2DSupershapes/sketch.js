let width = 400;
let height = 400;
let sliderA;
let sliderB;
let sliderN1;
let sliderN2;
let sliderN3;
let sliderM;
let sliderR;

function setup() {
    createCanvas(width, height);
    sliderA = createSlider(0,10,1,1);
    sliderB = createSlider(0,10,1,1);
    sliderN1 = createSlider(0,10,1,1);
    sliderN2 = createSlider(0,10,1,1);
    sliderN3 = createSlider(0,10,1,1);
    sliderM = createSlider(0,50,5,1);
    sliderR = createSlider(0,500,100,1);
}

function supershape(angle){
    let r = 1;
    let a = sliderA.value();
    let b = sliderB.value();
    let n1 = sliderN1.value();
    let n2 = sliderN2.value();
    let n3 = sliderN3.value();
    let m = sliderM.value();

    // a = 1;
    // b = 1;
    // n1 = 1;
    // n2 = 1;
    // n3 = 1;
    // m = 5;

    let p1 = pow(abs((1/a) * cos(angle * m / 4)),n2);
    let p2 = pow(abs((1/b) * sin(angle * m / 4)),n3);
    let p3 = pow(p1 + p2, 1/n1);
    if(p3 == 0){
        return 0;
    }
    
    return 1 / p3;
}

function draw() {
    background(0);
    translate(width / 2, height / 2);

    let resolution = sliderR.value();
    let increment = TWO_PI / resolution;

    stroke(255);
    noFill();
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += increment) {
        let r = supershape(angle);


        let x = 100 * r * cos(angle);
        let y = 100 * r * sin(angle);

        vertex(x, y);
    }
    endShape(CLOSE);
}