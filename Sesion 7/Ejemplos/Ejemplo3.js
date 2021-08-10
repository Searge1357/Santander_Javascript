/*Sumar todos los dígitos de un número entero:

Input: 12345

 -- 1 + 2 + 3 + 4 + 5 = 15

Output: 15
Este ejercicio puede ser resuelto mediante operadores matemáticos, pero en este ejemplo veremos otra forma implementando múltiples funciones. Lo primero que haremos es crear un arreglo y cada dígito del número será un elemento del arreglo. De esta forma será más fácil trabajar con funciones de alto orden como filter y reduce.*/
/*
const num = 12345; 

const str = num.toString(); //Convierte el número a string

const array = str.split(""); //Devuelve un nuevo array con separaciones


console.log(num); // 12345
console.log(str); // '12345'
console.log(array); // ['1', '2', '3', '4', '5']

Con el método toString() podemos convertir un número entero a un string. El método split() nos permite dividir un string en una serie de substrings y colocarlos dentro de un arreglo. En JavaScript podemos encadenar funciones, lo que retorne la primera función será pasada como argumento a la siguiente función, de esta manera podemos simplificar nuestro código.
*/
const num = 12345;

const array = num.toString().split('');

console.log(num); // 12345
console.log(array); // ['1', '2', '3', '4', '5']
/*
Antes de poder realizar operaciones matemáticas con este arreglo debemos convertir cada elemento a un entero nuevamente. En la sesión uno vimos cómo usar la función Number() para convertir un string a un number. Para aplicar esta función a cada elemento del arreglo usaremos la función map().*/

/*
const arrayOfNumbers = array.map(function(num){
    return Number(num); //Number() convierte de string a number
})

console.log(arrayOfNumbers); // [1, 2, 3, 4, 5]

Cuando usemos una función como map() y queremos que retorne el resultado de otra función con el mismo argumento podemos simplificarlo de la siguiente manera:*/

/*
const arrayOfNumbers = array.map(Number);

console.log(arrayOfNumbers); // [1, 2, 3, 4, 5]

const sum = arrayOfNumbers.reduce(function(a,b){ //Accumulative + current value
    return a+b; 
}, 0) //que inicie en 0

console.log(sum); */

//Todas estas funciones pueden ser encadenadas de la misma forma que hicimos con las primeras dos. El producto final dentro de una función sería:

function sumDigits(number) {
  return number
         .toString()
         .split('')
         .map(Number)
         .reduce(function(a, b) {
           return a + b;
         }, 0)
}

console.log(sumDigits(12345)); // 15


