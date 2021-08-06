/*Hacer que la función mutable, utilice un nuevo array y no modifique mi array principal llamado "array1"

const array1 = ['Hello'];

const mutable = array => {
    array.push('World');
    return array;
}

console.log(`Mi array1 al inicio: ${array1}`);

console.log(`Mi array resultante: ${mutable(array1)}`);

console.log(`Mi array1 después de la función: ${array1}`); */

const array1 = ['Hello'];

const mutable = array => {
    var newArray = array.map(valor => valor); //Es lo mismo a function(valor){return valor}
    //el map copia un array a otro, si solo pusiera newArray = array, por alguna razón ambos se modificarán con el .push
    //Creo que también pude haber hecho newArray = [...array]
    newArray.push('World');
    return newArray;
}

console.log(`Mi array1 al inicio: ${array1}`);

console.log(`Mi array resultante: ${mutable(array1)}`);

console.log(`Mi array1 después de la función: ${array1}`);