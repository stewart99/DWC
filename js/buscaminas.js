
function appBuscaminas(){


let maxFilas = prompt("Cuantas filas quieres")
let maxColumnas = prompt("Cuantas columnas quieres");
let numMinas = prompt("¿Cuantas minas quieres introducir?")

tableroBuscaminas = crearArrayTablero(maxFilas, maxColumnas);
tableroBuscaminas = colocarMinas(tableroBuscaminas, numMinas, maxFilas, maxColumnas);
tableroBuscaminas = contarMinas (tableroBuscaminas, maxFilas, maxColumnas)
pintarTablero(tableroBuscaminas, maxFilas, maxColumnas);


}



// Crear la array bidemensional para guardar las minas

let arrayTable = [];
let contadorMinas=0;


function crearArrayTablero(maxFilas,maxColumnas){

for (let fila = 0; fila < maxFilas; fila++) {
   
    arrayTable[fila]= [];


    for (let columna = 0; columna < maxColumnas; columna++) {
      
        arrayTable[fila][columna]="";
        
    }


}

return arrayTable;
    
}

function colocarMinas(arrayTable,numMinas,maxFilas,maxColumnas){


while(contadorMinas < numMinas){
    posFila=Math.floor(Math.random()*maxFilas);
    posColumna=Math.floor(Math.random()*maxColumnas);
   
    if(arrayTable[posFila][posColumna] != "Mina"){
        arrayTable[posFila][posColumna]="Mina"


        contadorMinas++;

    };

    arrayTable[posFila][posColumna]="Mina"
}

return arrayTable;

}




// Añadimos un numero a la array por posicion


function contarMinas(arrayTable,maxFilas,maxColumnas){

let numminasAlrededor=0;


for(let fila = 0;fila < maxFilas;fila++){
for(let columna = 0; columna < maxColumnas;columna++){
    numminasAlrededor=0;
    if(arrayTable[fila][columna] != "Mina"){
    for(let cFila = fila -1;cFila <=fila  +1;cFila++){
        if(cFila >=0 && cFila < maxFilas){
        for(let cColumna = columna -1; cColumna <= columna + 1;cColumna++){
          
            if(cColumna >= 0 &&  cColumna < maxColumnas && arrayTable[cFila][cColumna] == "Mina"){

             
                    
                    numminasAlrededor++;
                }
        

           }
           
        }


        arrayTable[fila][columna]=numminasAlrededor

    
    
    }

}

}


}

return arrayTable;

}



// Creamos el tablero en html

function pintarTablero(tabla,filas,columnas){

    document.write('<table>');

    for (let i = 0; i < filas; i++) {
        document.write('<tr>');
    
        for (let j = 0; j < columnas; j++) {
            document.write('<td>' + tabla[i][j] + '</td>');

            console.log(tabla)

        }
    
        document.write('</tr>');
    }
    document.write('</table>');

}



appBuscaminas();










/*
<table>
<tr>
    <td>1</td>
    <td>mina</td>
    <td>1</td>
    <td></td>
    <td>1</td>
</tr>

<tr>
    <td></td>
    <td>1</td>
    <td>2</td>
    <td>1</td>
    <td>2</td>
</tr>


<tr>
    <td></td>
    <td></td>
    <td>1</td>
    <td>mina</td>
    <td>1</td>
</tr>



<tr>
    <td>1</td>
    <td>mina</td>
    <td>2</td>
    <td>2</td>
    <td>mina</td>
</tr>



<tr>
    <td>1</td>
    <td>mina</td>
    <td>2</td>
    <td>1</td>
    <td>1</td>
</tr>



</table>


*/