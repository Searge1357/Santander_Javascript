var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];
  
//console.log(Object.values(singers)[0].band); //Me regresa "Aerosmith"
//console.log(singers[0]['band']); //Me regresa "Aerosmith"

/*
function pluck(list, propertyName) {
    let arregloObjetos = []
    for(let i = 0; i < Object.keys(list).length; i++){ //Object.keys(list).length me va a decir cuantas propiedades tiene el objeto 
        arregloObjetos.push(Object.values(list)[i].propertyName) //Va a empujar del objeto lista, la propiedad propertyName del arreglo i
    }
    return arregloObjetos; 
}
  

  
  console.log( pluck(singers, 'name') );
  // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
  console.log( pluck(singers, 'band') );
  // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
  console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964] */