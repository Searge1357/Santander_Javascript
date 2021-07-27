const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]

var carro = {}

for (var i = 0; i < car.length; i++){
    carro[car[i][0]] = car[i][1]
}

console.log(carro)