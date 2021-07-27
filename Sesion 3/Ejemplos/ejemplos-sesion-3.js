/* Ejemplo 1
const numbers = [1, 3, 4, 7, 2, 1, 9, 0]

const doubled = []

for(let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2)
}

console.log(numbers)  // [1, 3, 4, 7, 2, 1, 9, 0]
console.log(doubled)  // [2, 6, 8, 14, 4, 2, 18, 0] */

/*
const numbers = [1, 3, 4, 7, 2, 1, 9, 0]

const doubled = []

for(const number of numbers) {
  doubled.push(number * 2);
}

console.log(numbers)  // [1, 3, 4, 7, 2, 1, 9, 0]
console.log(doubled)  // [2, 6, 8, 14, 4, 2, 18, 0]*/


/*
const numbers = [1, 3, 4, 7, 2, 1, 9, 0]

const doubled = []

for(const number of numbers) {
  if (number === 1) continue
  doubled.push(number * 2);
}

console.log(numbers)  // [1, 3, 4, 7, 2, 1, 9, 0]
console.log(doubled)  // [6, 8, 14, 4, 18, 0] */


/*Ejemplo 2*/
/*

const car = {
  brand : 'Nissan', 
  model : 'Versa', 
  year : 2020
} */

/*Para resolver este ejercicio haremos uso del método 
Object.keys() el cual retorna un arreglo con el nombre de 
las propiedades de un objeto.

const obj = {
  a: 'some string',
  b: 42,
  c: false
};

console.log( Object.keys(obj) );  // ['a', 'b', 'c']

*/

/*
const keys = Object.keys(car)
const pairs = []

for (let i = 0; i < keys.length; i++){
  pairs.push([keys[i], car[keys[i]]]) //Este empuja un array al array jeje
}

console.log(pairs)*/

/*También existe object.values(), es como el keys, pero nos da
los valores de los keys*/

//Ejemplo 3

/*
Si la propiedad que queremos extraer no existe en el objeto se retorna undefined. Podemos usar asignar un valor por default en caso de no encontrar la propiedad que buscamos. Para esto debemos asignar (=) un valor dentro de las llaves.

const person = {
  firstName: 'John',
  lastName: 'Doe'
};

const { firstName, country = 'Unknown' } = person;

console.log(firstName, country); // John Unknown */

const person = {
  firstName: 'John',
  lastName: 'Doe'
};

const { firstName: name,  country: ctry = 'Unknown'} = person;

console.log(name, ctry); // John Unknown

