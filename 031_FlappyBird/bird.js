class Bird{
    constructor(){
        this.y = height/2;
        this.x = 50;
        this.gravity = .6;
        this.drag = 0.95;
        this.lift = -15;
        this.velocity = 0;
    }

    show(){
        fill(255);
        ellipse(this.x,this.y,36,36);
    }

    update(){
        this.velocity += this.gravity;
        this.velocity *= this.drag;
        this.y += this.velocity;

        if(this.y > height){
            this.y = height;
            this.velocity = 0;
        }
        
        if(this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }
    }

    up(){
        this.velocity += this.lift;
    }
}