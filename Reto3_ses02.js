let i = 0; 

while (i <= 100){
    if (i > 1){
        if (i == 2 || i == 3 || i == 5 || i == 7){
            console.log(i); 
        }
        else if (i%2 == 0 || i%3 == 0 || i%5 == 0 || i%7 == 0){
            i++; 
           continue;  
        }
        else {
            console.log(i); 
        }
    }
    i++; 
}


/* SOlución del profe 

for (let counter = 2; counter <= 100; counter++) {
  let isPrime = true;

  for (let i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      isPrime = false;
    }
  }

  if(isPrime) console.log(counter)
}

*/