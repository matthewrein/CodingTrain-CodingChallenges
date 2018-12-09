let width = 400;
let height = 400;

let angle;

function setup() {
    createCanvas(width, height);
    slider = createSlider(0, TWO_PI, PI / 4, .1);
}


function draw() {
    background(51);
    translate(width / 2, height);
    stroke(255);
    branch(100);
}

function branch(len) {
    angle = slider.value();

    line(0, 0, 0, - len);
    translate(0, -len);

    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 2 / 3);
        pop();
        push();
        rotate(-angle);
        branch(len * 2 / 3);
        pop();

    }
}