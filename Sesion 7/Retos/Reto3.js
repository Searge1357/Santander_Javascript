/*El ciclo empieza en start y termina cuando test retorne false.
En cada iteración se ejecuta la función body dándole como argumento el valor actual de start actual.
Al final de cada ciclo se ejecuta la función update. */


function loop(start, test, update, body) {
    var valor = start; //Para no modificar start la pongo en la variable valor
    while (test(valor) != false){ //Mientras valor > 0 dará true y se hará lo de dentro
        body(valor); //Se ejecuta la función body (console.log)
        valor = update(valor); //Actualizo la variable valor con la función update
    }
}
  
  const test = function(n) {
    return n > 0;
  }
  
  const update = function(n) {
    return n - 1;
  }
  
  loop(3, test, update, console.log);
  // 3
  // 2
  // 1
  
  /* Respuesta de los profes

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

*/