const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const calificaciones = {
    array3:[11, 12, 13, 14, 15]
};


const array4 = [...array1,...array2,...calificaciones.array3] //Junto los elementos de todos los arreglos en un solo arreglo

var esPrimo = false; 
var numPrimos = []; 
var sumNumPrimos = 0; 

for(let i=0; i < array4.length; i++){
    for(let j=2; j <= array4[i]; j++){ /*Va a empezar a contar desde 2, ya que todos son divisibles por 1, y va a llegar hasta el valor de
        array4[i]*/
        if (array4[i]%j == 0 && array4[i]!==j){ /*Si el valor de array4 entre el módulo de j es igual a 0, y el valor de array4 y j son diferentes
            quiere decir que no es primo*/
            esPrimo = false;
            break; //Este break se safa del for de dentro
        }
        else{ //En caso de que el módulo sea 0, y array4 y j son iguales, quiere decir que solo pudo dividirse entre sí mismo y es primo
            esPrimo = true; 
        }
    }
    if (esPrimo === true){
        sumNumPrimos += array4[i]; //Si es primo se lo sumo a sumNumPrimos
        esPrimo = false; 
        continue; 
    }
}

console.log(sumNumPrimos); 
