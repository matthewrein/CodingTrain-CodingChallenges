// const commands = {
//     "fd": function()
// }

const commands = {
    "fd": function(amt){
        turtle.forward(amt);
    },
    "bd": function(amt){
        turtle.forward(-amt);
    },
    "rt": function(angle){
        turtle.right(angle);
    },
    "lt": function(angle){
        turtle.right(-angle);
    },
    "pu": function(){
        turtle.pen = false;
    },
    "pd": function(){
        turtle.pen = true;
    }
}


class Turtle{
    constructor(x,y, angle){
        this.x = x;
        this.y = y;
        this.angle = angle;
    }

    reset(){
        translate(this.x,this.y);
        rotate(this.angle);
        this.pen = true;

        // this.direction = angle;
    }

    forward(amt){
        if(this.pen){
            stroke(255);
            strokeWeight(2);
            line(0,0,amt,0);
        }
        translate(amt,0);
    }

    right(angle){
        rotate(angle);
    }
}