const time = 25;
let greeting;

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

console.log(greeting) // Good afternoon