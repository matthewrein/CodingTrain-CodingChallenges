class Food{
    constructor(v){
        this.x = v.x;
        this.y = v.y;
    }

    show(){
        fill(255,0,100);
        rect(this.x, this.y, scl,scl);
    }
}