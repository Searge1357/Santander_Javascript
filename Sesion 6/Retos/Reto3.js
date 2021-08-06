const Triangle = function(a,b,c){
    this.a = a; 
    this.b = b; 
    this.c = c; 
}

Triangle.prototype.getPerimeter = function(){
    return (`El perímetro es: ${this.a+this.b+this.c}`) //La tilde al revés es la de corchete de cierre
}

const triangle = new Triangle(1,2,3); 

console.log(triangle); 
console.log(triangle.getPerimeter()); 