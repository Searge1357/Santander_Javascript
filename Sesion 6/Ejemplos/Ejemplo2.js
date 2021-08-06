/*
Desarrollo
Ya vimos cómo podemos instanciar objetos a partir del mismo constructor.

const Person = function(name) {
  this.name = name;
}

const john = new Person('John');
En ocasiones necesitamos que un constructor tenga las propiedades de otro.

const Developer = function(skills, yearsOfExperience) {
  this.skills = skills;
  this.yearsOfExperience = yearsOfExperience;
}
Con este constructor Developer podemos instanciar múltiples objetos que tendrán las propiedades skils y yearsOfExperience. Pero también necesitamos la propiedad name del constructor Person, pues un desarrollador también es una persona que tiene nombre. Para esto usamos el método call() el cual ejecuta el constructor padre.

const Person = function(name) {
  this.name = name;
}

const Developer = function(name, skills, yearsOfExperience) {
  Person.call(this, name);

  this.skills = skills;
  this.yearsOfExperience = yearsOfExperience;
}
Decimos que el constructor Developer es hijo del constructor Person porque queremos que Developer herede la propiedad name de Person.

Person.call(this, name); llama al constructor padre y retorna un objeto con todas sus propiedades. this en este contexto está haciendo referencia a Developer.*/

const Person = function(name){
    this.name = name; 
}

const Developer = function(name, skills, yearsOfExperience){
    Person.call(this, name); 

    this.skills = skills; 
    this.yearsOfExperience = yearsOfExperience; 
}

const john = new Developer("John", "Javascript", 10); 

console.log(john); 