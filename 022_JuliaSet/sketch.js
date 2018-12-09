let width = 200;
let height = 200;

let maxIterations = 100;

let minVal = -0.5;
let maxVal = 0.5;

let minSlider;
let maxSlider;

let angle = 0;

let options = [
    {x: 1,y: -1.6180339887},
    {x: 0.4,y: 0.6},
    {x: 0.285,y: 0},
    {x: 0.285,y: 0.01},
    {x: 0.45,y: 0.1428},
    {x: -0.70176,y: -0.3842},
    {x: -0.835,y: -0.2321},
    {x: -0.8,y: 0.156},
    {x: -0.7269,y: 0.1889},
    {x: 0,y: -0.8},
]


function setup() {
    createCanvas(width, height);
    colorMode(HSB,1);
    pixelDensity(1);

    sel = createSelect();
    for(let i = 0; i < options.length; i++){
        sel.option(i);
    }

    minSlider = createSlider(-2.5, 0, -2.5, 0.01);
    maxSlider = createSlider(0,2.5, 2.5, 0.01);

    frDiv = createDiv('');
}


function draw() {
    loadPixels();
    let c = options[sel.value()];
    let ca = c.x;
    let cb = c.y;
    // ca = map(mouseX, 0, width, -1,1);
    // cb = map(mouseY, 0, width, -1,1);

    ca = sin(angle);
    cb = cos(angle);
    angle += 0.02;


    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

            let a = map(x, 0, width, minSlider.value(),maxSlider.value());
            let b = map(y, 0, height, minSlider.value(),maxSlider.value());

            // let ca = a;
            // let cb = b;

            let n = 0;
            let z = 0;

            while(n < maxIterations){
                let aa = a * a - b * b;
                let bb = 2 * a * b;
                if(abs(a + b) > 4){
                    break;
                }

                a = aa + ca;
                b = bb + cb;

                n++;
            }

            let bright = map(n, 0, maxIterations, 0, 1);
            bright = map(sqrt(bright), 0,1,0,255);
            if(n == maxIterations){
                bright = 0;
            }

            let pix = (x + y * width) * 4;
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;

        }
    }
    updatePixels();
    frDiv.html(floor(frameRate()));
}