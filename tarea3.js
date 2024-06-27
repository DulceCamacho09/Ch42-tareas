console.log("TAREA#3")
/* Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */
/* Escribe un programa para calcular la suma y el producto (multiplicación) de un array de números. Imprime la suma y el producto.

Ejemplo: Dado un array [1, 2, 3, 4] La suma es 10. El producto es 24. */

/* const imprimirTablaDeMultiplicar = (number) => {
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  };

const numerosSeleccionados = [1 , 2 , 3 , 4];

for(let i=0; i<numerosSeleccionados.length;i++){
    const number = numerosSeleccionados[i];
    for (let j = 1; j <= 10; j++) {
        console.log(`${number} x ${j} = ${number * j}`);
      }
}
 */
// Función para calcular la suma y el producto de un array de números
const calcularSumaYProducto = (numeros) => {
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    const producto = numeros.reduce((acc, num) => acc * num, 1);
    console.log(`La suma es ${suma}.`);
    console.log(`El producto es ${producto}.`);
};

// Array de números proporcionado
const numerosSeleccionados = [1, 2, 3, 4];

// Llamada a la función para calcular y mostrar la suma y el producto
calcularSumaYProducto(numerosSeleccionados);
