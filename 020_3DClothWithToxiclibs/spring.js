class Spring extends toxi.physics2d.VerletSpring2D{
    constructor(a,b,len,str){
        super(a,b,len,str);
    }

    display(){
        stroke(255);
        strokeWeight(2);
        line(this.a.x,this.a.y,this.b.x,this.b.y);
    }
}

Spring.prototype = new toxi.physics2d.VerletSpring2D();
Spring.prototype.constructor = Spring;