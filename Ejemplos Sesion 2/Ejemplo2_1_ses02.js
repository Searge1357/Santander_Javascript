const time = 14;
let greeting;

switch(true){ //El true es para forzar la entrada hacia el switch
    case (time < 12): 
        greeting = "Good Morning"; 
        break; 
    case (time < 20): 
        greeting = "Good Afternoon"; 
        break; 
    case (time >= 20 && time < 24): 
        greeting = "Good Night"; 
        break; 
    default: 
        greeting = "Hora incorrecta"; 
}

console.log(greeting); 

/*
if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20 && time < 24) {
  greeting = "Good evening";
}
 else {
  greeting = "Hora incorrecta";    
 }

console.log(greeting) // Good afternoon*/