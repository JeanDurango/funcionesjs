/*Yoda el maestro jedí, necesita asignar a sus aprendices 
Padawans 2 actividades dependiendo de la edad de ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años*/

// declaramos la funcion principal

function datosAprendices(nombre,planeta,edad,estatura,callback){

    setTimeout(function(){
        let estudiante ={
             nombreAprendiz:nombre,
             planetaAprendiz:planeta,
             edadAprendiz:edad,
             estaturaAprendiz:estatura
        }
      
        callback(estudiante)
        },10000)
}



// llamando la funcion principal
datosAprendices("Jean Durango","BZR",8,150,function(estudiante){
    if (estudiante.edadAprendiz < 15){
        console.log("Aprendiz" + estudiante.nombreAprendiz + "Bienbenido a Manejo de la fuerza")
    }
    else {
        console.log("Aprendiz" + estudiante.nombreAprendiz + "Bienbenido a Manejo del sable de luz")
    }
})