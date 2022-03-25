// ejercicio #4

// Funcion Tradicional 

function revisarMachetes(color){
    for(let i=0; i<=20; i++){

            let machete = {
            color: color,
            energia: Math.round(Math.random() * (0,50) ),
            portador: "obi"
        }

            if (machete.energia <=20)
                console.log(machete)
            
    }
}
console.log(revisarMachetes("azul"))

// Funcion Flecha

let revisarMachete2 = color =>{

    for(let i=0; i<=20; i++){
       
        let machete1 = {
        color: color,
        energia: Math.round(Math.random() * (0,50) ),
        portador: "obi"

    }
             if (machete1.energia <=20)
            console.log(machete1)
    }
}

console.log(revisarMachete2("verde"))