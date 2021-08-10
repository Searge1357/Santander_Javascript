/* Crear una función compact que recibe un arreglo y retorna un nuevo arreglo sin incluir los valores que sean falsy. */

function compact(array){
    var newArray = array.filter(function(valor){ //Filter es una fucnión de filtro
//Es un predicado, regresa solo los valores que cumplen una condición
        return valor != false; 
    })
    return newArray; 
}

const array = [0, 1, false, 2, '', 3];
const compactedArray = compact(array);

console.log(compactedArray); //[1,2,3]

/* Solución de los profes

function compact(array) {
  return array.filter(function(element) {
    return !!element;
  });
}

*/