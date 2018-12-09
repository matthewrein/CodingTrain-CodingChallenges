class Firework {
    constructor(x, y) {
        this.exploded = false;
        this.particles = [];
        this.hu = random(255);

        this.firework = new Particle(x, y, this.hu, true);

    }


    update() {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();

            if (this.firework.vel.y >= 0) {
                this.explode();
            }
        }
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if(this.particles[i].forDestroy){
                this.particles.splice(i,1);
            }
        }
        if(this.exploded && this.particles.length === 0){
            this.firework.forDestroy = true;
        }
    }

    show() {
        if (!this.exploded) {
            this.firework.show();
        }
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].show();

        }
    }

    explode() {
        this.exploded = true;
        for (let i = 0; i < 100; i++) {
            let p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
            this.particles.push(p);
        }


    }
}