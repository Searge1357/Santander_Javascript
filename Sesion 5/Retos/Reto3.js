function getMaxAndMinofArray(numArray){
//Esta función regresa el valor máximo y mínimo de un arreglo de números
//Output: arreglo con los valores máximo y mínimo
//Esta utliza function.prototype.apply()
    var max = Math.max.apply(null, numArray); 
    var min = Math.min.apply(null, numArray); 
    return [max,min]
}

function findMissingNumbers(numArray){
    let valorMax = getMaxAndMinofArray(numArray)[0]; //Valor mayor del arreglo de entrada
    let valorMin = getMaxAndMinofArray(numArray)[1]; //Valor menor del arreglo de entrada
    let arrayOfMissingNumbers = []; 
    for(let i=valorMin; i < valorMax; i++){ //Se empezará a contar esde el valor mínimo del arreglo
        if (numArray.includes(i) == false){ //Checa si se incluye ese valor en el array
            arrayOfMissingNumbers.push(i); 
        }
    }
    return arrayOfMissingNumbers
}

console.log(findMissingNumbers([2, 1, 9, 5, 7, 3, 10])); // [4, 6, 8]
console.log(findMissingNumbers([12, 15, 9, 16, 7, 13, 20])); // [4, 6, 8]


/* Solución de los maestros

function findMissingNumbers(numbers) {
  const sortedArray = numbers.sort((a, b) => a - b) //El a-b se pone cuando se quieren ordenar números
  let missing = []
  for (let i = numbers[0]; i < numbers[sortedArray.length - 1]; i++) { 
    if (sortedArray.indexOf(i) < 0) { //Va a buscar el índice del valor i, si no se encuentra regresará un -1
      missing.push(i);
    }
  }
  return missing
} */