class DNA{
    constructor(genes){
        if(genes){
            this.genes = genes;
        } else {
            this.genes = [];
            for(let i = 0; i < lifespan; i++){
                this.genes[i] = p5.Vector.random2D();       
                this.genes[i].setMag(maxForce);       
            }
        }
    }

    crossover(partner){
        let newGenes = [];
        let midpoint = floor(random(this.genes.length));
        for(let i = 0; i < this.genes.length; i++){
            if(i > midpoint){
                newGenes[i] = this.genes[i];
            } else {
                newGenes[i] = partner.genes[i];
            }
        }
        return new DNA(newGenes);
    }

    mutation(){
        for(let i = 0; i < this.genes.length; i++){
            if(random(1) < 0.001){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(maxForce);
            }

        }
    }
}