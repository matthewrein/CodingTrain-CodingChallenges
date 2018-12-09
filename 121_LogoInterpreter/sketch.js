let editor;
let turlte;

function setup(){
    createCanvas(200, 200);
    angleMode(DEGREES);
    background(0);


    turtle = new Turtle(100,100,0);
    editor = select('#code');


    editor.input(goTurtle)

    goTurtle();
}


function goTurtle(){
    push();
    background(0);
    turtle.reset();
    let code = editor.value();
    let tokens = code.split(' ');

    let index = 0;
    while(index < tokens.length){
        let token = tokens[index];
        if(commands[token]){
            if(token.charAt(0) === 'p'){
                commands[token]();            
            } else{
                commands[token](tokens[++index]);            
            }
        }
        index++;
    }
    pop();
}