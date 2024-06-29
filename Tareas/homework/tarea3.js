console.log("TAREA#3")
/* Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */
/* Escribe un programa para calcular la suma y el producto (multiplicación) de un array de números. Imprime la suma y el producto.

Ejemplo: Dado un array [1, 2, 3, 4] La suma es 10. El producto es 24. */

let valores = [1, 2, 3, 4];

let suma = 0;
let producto = 1;

for (let i = 0; i < valores.length; i++) {
    suma += valores[i];
    producto *= valores[i];
}

console.log('La suma es:', suma);
console.log('El producto es:', producto);

document.getElementById('resultados').textContent = 
    'La suma es: ' + suma + '\n' +
    'El producto es: ' + producto;
    