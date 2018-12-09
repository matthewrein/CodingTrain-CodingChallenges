let width = 600;
let height = 400;

let blobs = [];
let blobCount = 3;

function setup() {
    createCanvas(width, height);
    for (let i = 0; i < blobCount; i++) {
        blobs[i] = new Blob(random(width), random(height));

    }
}


function draw() {
    background(0);
    loadPixels();

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let index = 4 * (x + y * width);
            let colSum = 0;
            for(let i = 0; i < blobs.length; i++){
                let d = dist(x, y, blobs[i].pos.x, blobs[i].pos.y)
                let col = 200 * blobs[i].r / d;
                colSum += col;
            }
            let hsbCol = HSBtoRGB(colSum, 255,255)
            pixels[index + 0] = hsbCol[0];
            pixels[index + 1] = hsbCol[1];
            pixels[index + 2] = hsbCol[2];
            pixels[index + 3] = 255;
        }
    }

    updatePixels();

    for (let i = 0; i < blobs.length; i++) {
        blobs[i].update();
        //blobs[i].show();
    }

}

function HSBtoRGB( h,s,v )
{
    let r,g,b;
	let i;
	let f, p, q, t;
	if( s == 0 ) {
		// achromatic (grey)
		r = g = b = v;
		return;
	}
	h /= 60;			// sector 0 to 5
	i = floor( h );
	f = h - i;			// factorial part of h
	p = v * ( 1 - s );
	q = v * ( 1 - s * f );
	t = v * ( 1 - s * ( 1 - f ) );
	switch( i ) {
		case 0:
			r = v;
			g = t;
			b = p;
			break;
		case 1:
			r = q;
			g = v;
			b = p;
			break;
		case 2:
			r = p;
			g = v;
			b = t;
			break;
		case 3:
			r = p;
			g = q;
			b = v;
			break;
		case 4:
			r = t;
			g = p;
			b = v;
			break;
		default:		// case 5:
			r = v;
			g = p;
			b = q;
			break;
    }
    return [r,g,b];
}
