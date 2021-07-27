function chunk(array, size) {
    longitud = array.length; 
    let contadorEspacios = 0;  
    let newArray = []; 
    let arrayAux = []; 

    

    for (let i = 0; i < longitud; i++){
        var valor = array[i]; 
        arrayAux[contadorEspacios] = valor; 
        contadorEspacios++; 
        if (contadorEspacios === size || i === longitud-1){
            contadorEspacios = 0; 
            newArray.push(arrayAux);
            arrayAux = [];
        }
    } 

    return newArray; 
  };
  
  var data = [1, 2, 3, 4, 5, 6, 7, 8]
  
  console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
  console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
  console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]