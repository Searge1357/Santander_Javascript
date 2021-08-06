const Group = function(){
    this.members = [] //Creo la propiedad members de esta clase
}

Group.prototype.add = function(valor){
    this.members.push(valor); 
}

Group.prototype.has = function(valor){
    if (this.members.indexOf(valor) < 0){ //con el IndexOf() Si el elemento no existe regresa -1
        return false; 
    }
    else{
        return true; 
    }
}

Group.from = function(array){ //Aquí no se pone el prototype, ya que es un método estático
//Un método estático tiene sentido cuando no se planea utilizar en un objeto ya hecho
    const newGroup = new Group(); 
    newGroup.members.push(...array); 
    return newGroup; 
}

const group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true