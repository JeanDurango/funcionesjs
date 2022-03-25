// ejercicio #2

// Ingresar el codigo con tres letras, tres numeros, dos puntos y luego el nombre del piloto

// Funcion tradicional 

function encontrarCodigo(codigo){

    let variable = codigo.split(":")[1]
    return variable
}

let resultado = encontrarCodigo("adb123 : Jean")
console.log(resultado)

// Funcion Flecha

let encontrarCodigo2 = codigo2=>variable = codigo2.split(":")[1]
console.log(encontrarCodigo2("abc123 : Jean"))




