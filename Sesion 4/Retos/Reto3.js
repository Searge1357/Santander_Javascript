

function resultFibonacciSequence(limit) {
   if (limit == 1 || limit == 2){
    return 1; 
   }
   else {
       return resultFibonacciSequence(limit - 1) + resultFibonacciSequence(limit - 2);   
   }
}

function fibonacciSequence(limit){
    let array = []; 
    for(let i = 1; i <= limit; i++){
        array.push(resultFibonacciSequence(i)); 
    }
    return array; 
}

console.log(fibonacciSequence(1));  // 1
console.log(fibonacciSequence(2));  // 1, 1
console.log(fibonacciSequence(5));  // 1, 1, 2, 3, 5
console.log(fibonacciSequence(6)); 