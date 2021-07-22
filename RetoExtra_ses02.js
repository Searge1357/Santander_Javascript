const Diametro = 1;
const Grosor = .24999;  
let mensajeDiametro; 
let mensajeGrosor; 

if (Diametro > 1.4){
    mensajeDiametro = "La rueda es para un vehículo grande";
    if (Grosor < .25){
        mensajeGrosor = "El grosor para esta rueda es inferior al recomendado";
    }
}
else if (Diametro <= 1.4 && Diametro > 0.8){
    mensajeDiametro = "La rueda es para un vehículo mediano";
    if (Grosor < .25){
        mensajeGrosor = "El grosor para esta rueda es inferior al recomendado";
    }
}
else {
    mensajeDiametro = "La rueda es para un vehículo pequeño";
}

console.log(mensajeDiametro); 

if (mensajeGrosor != undefined){
    console.log(mensajeGrosor); 
}