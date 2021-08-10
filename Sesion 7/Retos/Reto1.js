function flatten(arrays) {
    var longitudArray = arrays.length; 
    var newArray = [];
    for(let i=0; i < longitudArray; i++){
        newArray.push(...arrays[i]); 
    }
    /*
Esta forma es más larga, pero es sin usar los 3 puntos
    for(let i=0; i<longitudArray; i++){
        var longitudElemento = arrays[i].length; 
        for(let j=0; j<longitudElemento; j++){
            newArray.push(arrays[i][j]); 
        }
    }*/
    return newArray;
}
  
  const arrays = [[1, 2, 3], [4, 5], [6]];
  const array = flatten(arrays);
  
  console.log(array); // [1, 2, 3, 4, 5, 6]

/*Solución de profesores 

function flatten(arrays) {
  return arrays.reduce(function(flat, current) {
    return flat.concat(current);
  }, []);
} */