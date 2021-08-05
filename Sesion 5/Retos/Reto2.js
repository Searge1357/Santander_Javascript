/*Escribir una función que reciba un arreglo de 10 enteros entre 0 - 9, y retorne un string en forma de número telefónico.

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"

La función debe retornar el mismo formato, incluyendo el espacio después del paréntesis.
*/

//SOLUCIÓN DE LOS PROFES (MUCHO MÁS SENCILLA)

function createPhoneNumber(numbers) {
    let format = '(xxx) xxx-xxxx'
    for (let num of numbers) {
      format = format.replace('x', num)
    }
    return format
  }
  

/*SOLUCIÓN MÍA

function createPhoneNumber(array){
//Convierte el arreglo dado de la función formatoNumero() a un string
    var phoneNumberArray = formatoNumero(array), phoneNumber = "" //phoneNumber es un string vacío para que al sumarle cosas, no interfiera con el resultado

    phoneNumberArray.forEach(function(valor){ //forEach() aplica para arrays, es como un interación, cada valor del arreglo entra individualmente
    //a la función y se le suma a la variable phoneNumber, para así quitarle el formato de arreglo
        phoneNumber += valor 
    });
    return phoneNumber //Regresa el número telefónico. 
}

function formatoNumero (array){
//Esta función obtiene el formto para el número que es así "(xxx) xxx-xxxx", devolverá todos los elementos del número telefónico en un arreglo
    newArray = []
    for (let i=0; i < array.length+5; i++){ //le sumo 5 al length ya que son 5 elementos extras que se agregarán
        if (i <= 6){
            if (i == 0){
                newArray.push('"')
            }
            else if (i == 1){
                newArray.push('(')
            }
            else if (i == 5){
                newArray.push(')')
            }
            else if (i == 6){
                newArray.push(' ')
            }
            else {  
                newArray.push(array[i-2])
            }
        }
        else{
            if (i == 10){
                newArray.push('-')
            }
            if (i == 14){
                newArray.push('"')
            }
            else{
            newArray.push(array[i-4])
            }
        }
    }
    return newArray
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890" */