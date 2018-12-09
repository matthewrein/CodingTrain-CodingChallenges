class Planet {
    constructor(r, d, o, img) {
        this.radius = r;
        this.distance = d;
        this.angle = random(0, PI * 2);
        this.planets = [];
        this.orbitSpeed = o;
        this.img = img;

        this.v = p5.Vector.random3D();
        this.v.mult(this.distance);

    }
    orbit() {
        this.angle += this.orbitSpeed;
        for (let i = 0; i < this.planets.length; i++) {
            this.planets[i].orbit();
        }
    }

    spawnMoons(total, level) {
        if (level > 0) {
            for (let i = 0; i <= total; i++) {
                let r = random(.1 * this.radius, .4 * this.radius);
                let d = random(this.radius + r, 2 * (this.radius + r)) + r;
                let o = random(-.03, .03);
                let t = Math.floor(random(0,textures.length));
                this.planets.push(new Planet(r, d, o, textures[t]));
                let moons = random(0, 5);
                this.planets[this.planets.length - 1].spawnMoons(moons, --level);
            }
        }
    }

    show() {
        push();
        let v2 = createVector(1,0,1);
        let p = this.v.cross(v2).normalize();
        if(!(p.x == 0 && p.y == 0 && p.z == 0)){
            rotate(this.angle,p);
            //stroke(255);
            //line(0,0,0,this.v.x*10,this.v.y*10,this.v.z*10);
        }

        translate(this.v.x, this.v.y, this.v.z);
        noStroke();
        fill(200);
        pointLight(255, 255, 255, 0, 0, 0);
        if(this.img == sunTexture){
            directionalLight(255,255,255,0,0,-1);
        }

        texture(this.img);
        sphere(this.radius);
        
        for (let i = 0; i < this.planets.length; i++) {
            this.planets[i].show();
        }
        pop();
    }
}