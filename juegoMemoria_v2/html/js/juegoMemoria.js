
    class Tabla{


    constructor(filas,columnas){

        this.filas=filas;
        this.columnas=columnas;

        this.crearTablero();
    }



Comprobacion(){

    this.filas=prompt("Dime el numero de filas");
    this.columnas=prompt("Dime el numero de columnas");
    


    if((this.filas * this.columnas) % 2 != 0 || this.filas <= 0 || this.columnas <=0){



        alert("El numero introducido de filas o de las columnas es impar");

        this.Comprobacion();

    }



}
    
    crearTablero(){

        this.tablaMemoria=[];

        for (let fila = 0; fila < this.filas; fila++) {
           
            this.tablaMemoria[fila]=[];
        
        for (let  columna = 0; columna < this.columnas; columna++) {
          


            this.tablaMemoria[fila][columna]="";

       
        }


            
        }


        

    }



    pintarTablaMemoria(){

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







dibujarTableroDOM(){


let tabla = document.createElement('table');
let fila;
let columna;


for (let i = 0; i < this.filas; i++) {
    
    fila = document.createElement('tr');
    tabla.appendChild(fila);


for (let j = 0; j < this.columnas; j++) {
    
    columna = document.createElement('td');
    columna.id = `f${i}_c${j}`;
    columna.dataset.fila=i;
    columna.dataset.columna = j;
    fila.appendChild(columna);
    
}
    
}

document.body.appendChild(tabla);

}

}

class JuegoMemoria extends Tabla{


    constructor(filas,columnas){

        super(filas,columnas);
        this.comprobar;
        this.idultimacelda;
        this.resultado=0;
        this.contadorClick=0;
        this.numIntentos=0;
        this.Comprobacion();
        this.dibujarTableroDOM();


    }



    colocarParejas(){


let parejas=["img/mario.png","img/caparazon.png","img/goomba.png","img/koopa.png","img/lakitu.png","img/luigi.png","img/luma.png","img/luna.png","img/mario.png","img/seta.png"];
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



dibujarTableroDOM(){
    

    super.dibujarTableroDOM();
   
    let celda;

    this.destapar = this.destapar.bind(this);


for (let i = 0; i < this.filas; i++) {
    
    for (let j = 0; j < this.columnas; j++) {
       
        celda=document.getElementById(`f${i}_c${j}`);
        
        celda.addEventListener('click',this.destapar);
        
    }
    
}

}


destapar(elEvento){

    let evento = elEvento || window.event;
    let celda = evento.currentTarget;
    let fila = celda.dataset.fila;
    let columna=celda.dataset.columna;
    let idcelda=celda.id;
    let valorCelda = this.tablaMemoria[fila][columna];
    let  imagen = document.createElement('img');
    imagen.src=valorCelda;
    let ultimafoto = document.getElementById(this.idultimacelda);
   
  
    

    if(celda.lastChild == null){

    

        celda.appendChild(imagen);

        this.contadorClick++;

      
     
      

        if(this.contadorClick == 2){

        if(this.idultimacelda != idcelda && this.idultimacelda != null){


            if(this.ultimafoto != valorCelda){
     
             console.log("distinto"); 


             setTimeout(borrar,1000);

             function borrar(){


             celda.removeChild(celda.lastChild);
             ultimafoto.removeChild(ultimafoto.lastChild);

             

             }


             this.numIntentos++;
               
           
        }else{

            if(this.numIntentos == 0){

                this.resultado=this.resultado + 10;
               

            }else if(this.numIntentos == 1){


                this.resultado=this.resultado + 7.5;


            }else if(this.numIntentos == 2){

                this.resultado=this.resultado + 2.5;


            }else{


                this.resultado=this.resultado + 0;


            }



    }


    this.marcadorActualizado();


    }

   
    if(this.contadorClick == 2){

        this.contadorClick=0;

    }
}

    }

    this.idultimacelda=idcelda;
    this.ultimafoto=valorCelda;
    

}



crearboton(){


let boton = document.createElement('button');
boton.innerText="Reiniciar";


document.body.appendChild(boton);

this.reiniciarTablero = this.reiniciarTablero.bind(this);


boton.addEventListener('click',this.reiniciarTablero);

    
}

reiniciarTablero(elEvento){

   
    let respuesta =  window.confirm("Quieres reniniciar el juego");

    if(respuesta == true){

        

        location.reload();



    }

   
}

crearmarcador(){


let marcador = document.createElement("div");

document.body.appendChild(marcador);

marcador.id="marcador";
marcador.innerHTML="Puntuacion  " +  this.resultado   + "/" + this.filas * this.columnas / 2 * 10;



    
}


marcadorActualizado(){


    marcador.innerHTML= "Puntuacion  " +  this.resultado   + "/" + this.filas * this.columnas / 2 * 10;
  

}


}





window.onload = function() {
let buscaminas1 = new JuegoMemoria(); 
buscaminas1.crearTablero();
buscaminas1.colocarParejas();
buscaminas1.crearboton();
buscaminas1.crearmarcador();



}













