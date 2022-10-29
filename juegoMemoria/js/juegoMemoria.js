
let maxFilas=prompt("Maximos de filas");
let maxColumnas=prompt("Maximos de filas");


  

        tablaMemoria=[];

            for (let fila = 0; fila <=maxFilas; fila++) {
               
                tablaMemoria[fila]=[];
            
            for (let  columna = 0; columna <=maxColumnas; columna++) {
              


                tablaMemoria[fila][columna]="";



     

            }

        }




        








            document.write('<table>');

        for (let i = 0; i < maxFilas; i++) {
            document.write('<tr>');
        
        for (let j = 0; j < maxColumnas; j++) {
           
            document.write("<td>" + tablaMemoria[i][j]  + "</td>");
            
        }
        
        }

        document.write('</tr>');
        document.write('</table>');


        
console.log(tablaMemoria);










