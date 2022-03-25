// ejercicio #1
// Funcion tradicional

function calcularDistancia(x1,y1,x2,y2){
    
    let raizCuadrada =Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))
    return raizCuadrada.toFixed(2)
}

let respuesta = calcularDistancia(0,0,10,10)
console.log(respuesta)

// Funcion flecha

let calcularDistancia2 = (x1,y1,x2,y2) => raizCuadrada =Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2)).toFixed(2)

let distancia = calcularDistancia2(0,0,-10,-10)

console.log(distancia)




