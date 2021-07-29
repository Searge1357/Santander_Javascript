function power(base, exponent){
    if (exponent > 0){
        var exponente = exponent - 1; 
        var coeficiente = base; 
        
    }
    else{
        return 1; 
    }
    return coeficiente * power(base, exponente);
}



console.log(power(2,3)); 