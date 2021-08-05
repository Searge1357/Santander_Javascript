/*const car = {
    brand: "Nissan",
    model: "Sentra", 
    year: 2021
}

function addColor(car){
    car.color = "Red"
    return car
}

console.log("Antes de llamar addColor()", car); 
const sameCar = addColor(car); 
console.log("Despues de llamar addColor()", car); 
console.log("[sameCar] Despues de llamar addColor()", sameCar);
console.log("sameCar === car", sameCar === car); //True
//*** ESTE COMPORTAMIENTO DE ARRIBA NO ES LO QUE ESPERAMOS //
//*** YA QUE MODIFICA car, no crea un nuevo objeto//
*/

const car = {
    brand: "Nissan",
    model: "Sentra", 
    year: 2021
}

function addColor(car){
    const newCar = Object.assign({}, car,{
    //Lo que hace es que crea un nuevo objeto (newCar) y le pasa las propiedades
    //del objeto car
        color: "Red"
    //Esto le agrega la propiedad color a newCar
    })
    return newCar
}

console.log("Antes de llamar addColor()", car); 
const sameCar = addColor(car); 
console.log("Despues de llamar addColor()", car); 
console.log("[sameCar] Despues de llamar addColor()", sameCar);
console.log("sameCar === car", sameCar === car); //false

//***HAY QUE TENER CUIDADO CON ESTE TIPO DE COSAS//