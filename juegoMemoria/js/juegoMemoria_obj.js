
//Creamos la clase tabla
class Tabla{


        constructor(filas,columnas){

            this.filas=filas;
            this.columnas=columnas;

            this.crearTablero();
        }


    //Pediremos al usuario que introduzca las filas y las columnas 
    Comprobacion(){

        this.filas=prompt("Dime el numero de filas");
        this.columnas=prompt("Dime el numero de columnas");
        
    

        if((this.filas * this.columnas) % 2 != 0 || this.filas <= 0 || this.columnas <=0){



            alert("El numero introducido de filas o de las columnas es impar");
    
            this.Comprobacion();
    
        }
    
    

    }
        //Creamos el tablero
        crearTablero(){

            this.tablaMemoria=[];

            for (let fila = 0; fila < this.filas; fila++) {
               
                this.tablaMemoria[fila]=[];
            
            for (let  columna = 0; columna < this.columnas; columna++) {
              


                this.tablaMemoria[fila][columna]="";

           
            }


                
            }


            

        }


        //pintamos la tabla
        pintarTablaMemoria(){

            document.write("<h1>Juego de Memoria</h1>")

            document.write('<table>');

        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');
        
        for (let j = 0; j < this.columnas; j++) {
           
            document.write("<td><img src=" + this.tablaMemoria[i][j] +  "></td>");
            
        }
        
        document.write('</tr>');
        }



        document.write('</table>');


        }



}


//Creamos la clase JuegoMemoria
class JuegoMemoria extends Tabla{


        constructor(filas,columnas){

            super(filas,columnas);


        }


        //Colocamos las parejas
        colocarParejas(){


    let parejas=["img/mario.png","img/caparazon.png","img/goomba.png","img/koopa.png","img/lakitu.png","img/luigi.png","img/luma.png","img/luna.png","img/bullet.png","img/seta.png"];
    let posFila=0;
    let posColumna=0;
    let contadorNumparejas=0;
    let contadorParejas=0;
    let repeticion=true;
    let numeroCasillas=(this.filas * this.columnas)/2;


    while(contadorNumparejas < numeroCasillas){

        posFila=Math.floor(Math.random()*this.filas);
        posColumna=Math.floor(Math.random()*this.columnas);

    

        if(this.tablaMemoria[posFila][posColumna] == ""){


            this.tablaMemoria[posFila][posColumna]=parejas[contadorParejas];


            while(repeticion){

                posFila=Math.floor(Math.random()*this.filas);
                posColumna=Math.floor(Math.random()*this.columnas);
        
        
        
                if(this.tablaMemoria[posFila][posColumna] == ""){
        
        
                    this.tablaMemoria[posFila][posColumna]=parejas[contadorParejas];
                    repeticion=false;
        
                
    
                }
    
        
    
        }

        
          
        contadorNumparejas++;
        contadorParejas++;
        repeticion=true;



        if(contadorParejas == 10){


            contadorParejas = 0;
        }
    }  
        
    }

    
    }
    

}





    

        




        







let memoria = new JuegoMemoria(5,5);
memoria.Comprobacion();
memoria.crearTablero();
memoria.colocarParejas();
memoria.pintarTablaMemoria();
console.log(memoria.tablaMemoria)











