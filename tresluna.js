// ejrcicio #3

//Funcion Tradicional

// Ingresa la temperatura maxima y minima de cada dia

function calcularTemperatura(tempMaxima, tempMinima){

    let temperatura = (tempMaxima + tempMinima)/2
    return temperatura

}
let result = calcularTemperatura(15,5)
console.log(result +"°C")

//Funcion Flecha

let calcularTemperatura2 = (tempMaxima1, tempMinima1) => (tempMaxima1 + tempMinima1)/2
console.log(calcularTemperatura2(16,18) + "°C")


