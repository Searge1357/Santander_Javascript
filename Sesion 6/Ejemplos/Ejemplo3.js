const Person = function(name, birthYear, job){
    this.name = name; 
    this.birthYear = birthYear; 
    this.job = job; 
}

Person.prototype.calculateAge = function(){
    const today = new Date(); 
    const year = today.getFullYear(); 

    console.log(year - this.birthYear); 
}

const john = new Person('John', 1990, 'Developer');

const mark = new Person('Mark', 1985, 'Teacher');

const jane = new Person('Jane', 1975, 'Designer');

//Si inspeccionamos en consola estos tres objetos nos damos 
//cuenta de que ninguno de ellos tiene el método calculateAge().

console.log(john); 
console.log(mark); 
console.log(jane); 

//Aun así podemos llamar calculateAge() en los tres objetos.

john.calculateAge(); 
mark.calculateAge(); 
jane.calculateAge(); 

/*Si inspeccionamos más a detalle estos objetos podemos encontrar 
el método calculateAge() dentro de __proto__ que es el prototype del 
objeto. Incluso nos muestra cuál es el contructor del que fue 
instanciado. De hecho, podemos inspeccionar todo el prototype chain.*/