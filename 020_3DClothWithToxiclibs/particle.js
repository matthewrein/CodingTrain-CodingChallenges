class Particle extends toxi.physics2d.VerletParticle2D{
    constructor(x, y){
        super(x,y);
    }

    display(){
        ellipse(this.x, this.y,10,10);
    }
}

Particle.prototype = new toxi.physics2d.VerletParticle2D();
Particle.prototype.constructor = Particle;