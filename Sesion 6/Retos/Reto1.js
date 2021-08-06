/*

Objetivos
Crear un constructor, agregar métodos al prototype e instanciar múltiples objetos a partir de dicho constructor.

Requisitos
N/A

Desarrollo
Crear un function constructor Vec el cual representa un vector en dos dimensiones. Recibe dos parámetros x y y, ambos valores numéricos que deben ser las propiedades del objeto.

Agregar los siguientes métodos al prototype de Vec:

plus: Recibe otro vector como parámetro y retorna un nuevo vector con la suma de ambos vectores.

minus: Recibe otro vector como parámetro y retorna un nuevo vector con la diferencia de ambos vectores.

length: Retorna la longitud del vector, es decir, la distancia del punto (x, y) desde el origen (0, 0).

const Vec = function(x, y) {
  // Code goes here...
}

const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979
Para calcular la distancia desde (0, 0) hasta (x, y) se puede usar el teorema de Pitágoras: √(x2 + y2). En JavaScript existe el método Math.sqrt para calcular raíces cuadradas.

*/

const Vec = function(x,y){
    this.x = x; //Esto crea una propiedad de la clase Vec
    this.y = y; 
}

Vec.prototype.plus = function(vector){
    var sumaX = this.x + vector.x; //X del objeto base + X del objeto que se introduce en la función
    var sumaY = this.y + vector.y; 
    const newVec = new Vec(sumaX, sumaY); //Creamos un nuevo vector, con los nuevos datos de X y Y
    return newVec; 
}  

Vec.prototype.minus = function(vector){
    var restaX = this.x - vector.x;
    var restaY = this.y - vector.y; 
    const newVec = new Vec(restaX, restaY); 
    return newVec; 
}

Vec.prototype.length = function(){
    var sumaDeCuadrados = Math.pow(this.x,2) + Math.pow(this.y,2)
    var raiz = Math.sqrt(sumaDeCuadrados); 
    return raiz; 
}

const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979