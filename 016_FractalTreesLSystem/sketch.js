let width = 400;
let height = 400;

let angleMin;
let angleMax;
let len = 100;

let axiom = "F";
let sentence;
let rules = [{
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]"
}]
function setup() {
    createCanvas(width, height);
    background(51);

    angleMin = radians(10);
    angleMax = radians(20);
    sentence = axiom;
    createP(axiom);
    let button = createButton("generate");
    button.mousePressed(generate);
    generate();
    generate();
    generate();
    generate();
    turtle();
}


function draw() {

}

function turtle() {
    background(51);
    resetMatrix();
    translate(width/2, height);
    stroke(255, 255,255,100);
    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        if (current == "F") {
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (current == "+") {
            rotate(random(angleMin,angleMax));
        } else if (current == "-") {
            rotate(-random(angleMin,angleMax));
        } else if (current == "[") {
            push();
        } else if (current == "]") {
            pop();
        }
    }
}

function generate() {
    len *= 0.5;
    let nextSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        let found = false;
        for (let j = 0; j < rules.length; j++) {
            if (current == rules[j].a) {
                found = true;
                nextSentence += rules[j].b;
                break;
            }
        }
        if (!found) {
            nextSentence += current;
        }

    }
    sentence = nextSentence;
    createP(sentence);
    turtle();
}