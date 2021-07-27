const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]
var longitud = numbers.length
var suma  = 0

for (var i = 0; i < longitud; i++){
    suma = suma + numbers[i]
}

var promedio = suma / longitud

console.log(promedio)