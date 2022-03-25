// ejercicio #5

// funcion tradicional

// Ingrese la cantidad de naves vendidas

function pagarSalarioaPersonal(cantidadNaves){
    
    let salario = 3500000
    let comision = 1500000 * cantidadNaves
    let deduccion = 0.05

    let descuento = comision*deduccion
    let total = salario + comision - descuento

    return total
}
let netoPagar = pagarSalarioaPersonal(3)
console.log(netoPagar)

// Funcion flecha

let pagarsalario = (cantidadNaves1) => nomina = 3500000 + ((1500000*cantidadNaves1)  - (1500000*cantidadNaves1) * 0.05) 

console.log(pagarsalario(3))

