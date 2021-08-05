var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];
  
  function pluck(list, propertyName) {
    let newArray = []
    for(let i=0; i < list.length; i++){ //List.length regresa un 4, ya que es el número de objetos que hay dentor
      //De esta forma obteneos una propiedad de un arreglo de objetos
      newArray.push(list[i][propertyName])
    } 
    return newArray
  }
  
  console.log( pluck(singers, 'name') );
  // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
  console.log( pluck(singers, 'band') );
  // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
  console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964]