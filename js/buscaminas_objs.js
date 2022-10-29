
class Tablero{

    

    constructor(filas,columnas){

        this.filas = filas;
        this.columnas=columnas;

        this.crearTablero();
        this.pintarTablero();
    }


    crearTablero(){


    this.arrayTable = [];



for (let fila = 0; fila < this.filas; fila++) {
   
    this.arrayTable[fila]= [];


    for (let columna = 0; columna < this.columnas; columna++) {
      
        this.arrayTable[fila][columna]="";
        
    }
    
}
    }


}


const buscaminas = new Tablero(4,3);
buscaminas.crearTablero();
console.log(buscaminas.arrayTable);
