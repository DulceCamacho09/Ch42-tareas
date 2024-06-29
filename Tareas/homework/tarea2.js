console.log("TAREA #2")

/* Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
 */
/* ESCRIBE UNA FUNCION QUE :
TOMA ARRAY DE NUMEROS
DIPLICA EL VALOR DE CADA NUMERO DE ARRAY
IMPRIME AFUERA UN NUEVO UPDATED ARRAY
EJEMPLO : ado un array [1, 2, 4, 5]. La salida debe ser [2, 4, 8, 10].
*/

const duplicaValor = ( array ) => {
    const newArray = [];
    for(let i = 0; i<array.length; i++ ){
      newArray.push( array[i] * 2 );
    }
    return newArray;
 };

 const myArray = [1, 2, 4, 5] ;
 console.log(  duplicaValor( myArray )   ); 
 
