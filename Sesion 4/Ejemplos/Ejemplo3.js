/*Para convertir esta función en una IIFE debemos envolver toda la función en paréntesis, eso lo hace una expresión, 
posteriormente usamos () para ejecutar la función justo después de ser definida.

(function() {
    const name = "John Doe";
    console.log(name);
  })();*/

/*Como ya fue ejecutada y es anónima, no hay forma de que podamos volver a llamar la función de nuevo.

También se pueden pasar argumentos a este tipo de funciones, de la misma forma que lo hacemos con las funciones normales.*/

(function(lastName) {
  const firstName = "John";
  console.log(`${firstName} ${lastName}`);
})('Doe');