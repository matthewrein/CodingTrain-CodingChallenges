let width = 800;
let height = 800;

let cells = [];

function setup(){
    createCanvas(width,height);
    cells.push(new Cell());

}


function draw(){
    background(51);
    for(cell of cells){
        cell.move();
        cell.show();
    }
}

function mousePressed(){
    for(let i = cells.length - 1; i >= 0; i--){
        if(cells[i].clicked(mouseX,mouseY)){
            cells.push(cells[i].mitosis());
            cells.push(cells[i].mitosis());
            cells.splice(i,1);
        }
    }
}