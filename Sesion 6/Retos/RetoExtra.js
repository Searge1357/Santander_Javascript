const Stack = function(){
    this.stack = []; 
}

Stack.prototype.push = function(valor){
    var size = this.stack.length; //Va decirme el valor del size del stack antes de agregar el valor
    this.stack[size] = valor; //El valor del size anterior será el índice del nuevo valor
//Igual simplemente podría poner this.stack.push
}

Stack.prototype.pop = function(){
    var indiceUltimoElemento = this.stack.length-1; 
    return this.stack.splice(indiceUltimoElemento,1); 
//.splice(indice del elemento a eliminar, cuantos quieres eliminar)
//Igual podría usar .pop()
}

Stack.prototype.peek = function(){
    var indiceUltimoElemento = this.stack.length-1; 
    return (this.stack[indiceUltimoElemento]) ?? null;//EN caso de no haber nada regresa null 
}

Stack.prototype.print = function(){
    console.log(this.stack)
}

Stack.prototype.simularQueue = function(){
    const stackAux = new Stack(); 
    this.stack.forEach(element => stackAux.push(element)); //Copio el stack a stackAux 
    var tamañoStack = this.stack.length; //Obtengo el tamaño del stack donde estoy
    this.stack = []; //Borro todo el stack donde estoy
    for(let i=0; i < tamañoStack; i++){
        this.push(stackAux.stack.pop()); //Empujo cada elemento del stackAux, al stack donde estoy 
    }
    //stackAux.stack.forEach(element => this.push(element)); 
}

const stack = new Stack(); 

stack.push(5); 
stack.push(4);
stack.push("Hola");
stack.push(1000);
stack.push(789);
stack.push("Como estás?");


stack.print(); 

console.log(stack.peek())
stack.pop(); 
stack.pop();
stack.pop();

stack.print(); 

const queue = new Stack(); 
queue.push(5);
queue.push(4);
queue.push(3);
queue.push(2);
queue.push(1);
queue.print(); 
queue.simularQueue(); 
queue.print(); 
