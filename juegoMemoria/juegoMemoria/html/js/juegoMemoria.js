

let maxFilas=prompt("Dime el numero de filas");
let maxColumnas=prompt("Dime el numero de columnas");



    if((maxFilas * maxColumnas) % 2 != 0 || maxFilas <= 0 || maxColumnas <=0){



        alert("El numero introducido de filas o de las columnas es impar");

     


    }









 
     
            this.tablaMemoria=[];

            for (let fila = 0; fila < maxFilas; fila++) {
               
                this.tablaMemoria[fila]=[];
            
            for (let  columna = 0; columna < maxColumnas; columna++) {
              


                this.tablaMemoria[fila][columna]="";

           
            }


                
            }


            

        








            document.write('<table>');

        for (let i = 0; i < maxFilas; i++) {
            document.write('<tr>');
        
        for (let j = 0; j < maxColumnas; j++) {
           
            document.write('<td></td>');
            
        }
        
        document.write('</tr>');
        }



        document.write('</table>');


      

    console.log(memoria)











