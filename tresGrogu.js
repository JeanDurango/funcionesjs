/*Grogu ha iniciado su entrenamiento Jedi y debe 
activar un software que permita clasificar su dieta

Cree un programa que permita recibir 50 alimentos diferentes y 
mediante una función primaria después de 5 segundos se 
pueda obtener solo los alimentos de tipo vegetal que entreguen 
mas de 200 unidades de energía. Finalmente, una función 
callback debe permitir entregar la sumatoria de niveles de 
energía entregados por los alimentos vegetales consumidos en 
la dieta de Grogu*/


        let alimentos =[
            {nombre: "ají", tipo: "vegetales", calorias: 234},
            {nombre: "repollo", tipo: "vegetales", calorias: 376},
            {nombre: "arroz", tipo: "arinas", calorias: 450},
            {nombre: "trigo", tipo: "arinas", calorias: 345},
            {nombre: "panela", tipo: "azucares", calorias: 499},
            {nombre: "caramelo", tipo: "azucares", calorias: 500},
            {nombre: "remolacha", tipo: "vegetales", calorias: 160},
            {nombre: "zanahoria", tipo: "vegetales", calorias: 199},
            {nombre: "platano", tipo: "arinas", calorias: 243},
            {nombre: "frijol", tipo: "vegetales", calorias: 277},
            {nombre: "papa", tipo: "vegetales", calorias: 324},
            {nombre: "bocadillo", tipo: "azucares", calorias: 500},
            {nombre: "leche", tipo: "lacteos", calorias: 500},
            {nombre: "yogurt", tipo: "lacteos", calorias: 230},
            {nombre: "pepino", tipo: "vegetales", calorias: 200},
            {nombre: "kumit", tipo: "lacteos", calorias: 356},
            {nombre: "pastas", tipo: "arinas", calorias: 456},
            {nombre: "lechuga", tipo: "vegetales", calorias: 187},
            {nombre: "tomate", tipo: "vegetales", calorias: 176},
            {nombre: "arina", tipo: "arinas", calorias: 343},
            {nombre: "lentejas", tipo: "arinas", calorias: 400},
            {nombre: "cebolla", tipo: "vegetales", calorias: 160},
            {nombre: "ajo", tipo: "vegetales", calorias: 106},
            {nombre: "col", tipo: "vegetales", calorias: 130},
            {nombre: "habichuela", tipo: "vegetales", calorias: 188},
            {nombre: "queso", tipo: "lacteos", calorias: 250},
            {nombre: "suero", tipo: "lacteos", calorias: 300},
            {nombre: "cebollin", tipo: "vegetales", calorias: 105},
            {nombre: "cilantro", tipo: "vegetales", calorias: 105},
            {nombre: "mora", tipo: "frutas", calorias: 121},
            {nombre: "mango", tipo: "frutas", calorias: 100},
            {nombre: "fresa", tipo: "frutas", calorias: 156},
            {nombre: "guayaba", tipo: "frutas", calorias: 190},
            {nombre: "pera", tipo: "frutas", calorias: 200},
            {nombre: "manzana", tipo: "frutas", calorias: 187},
            {nombre: "aguacate", tipo: "frutas", calorias: 170},
            {nombre: "ochuas", tipo: "vegetales", calorias: 432},
            {nombre: "lulo", tipo: "frutas", calorias: 134},
            {nombre: "mandarina", tipo: "frutas", calorias: 103},
            {nombre: "naranja", tipo: "fruta", calorias: 150},
            {nombre: "galleta", tipo: "Azucares", calorias: 250},
            {nombre: "piña", tipo: "frutas", calorias: 170},
            {nombre: "rabano", tipo: "vegetales", calorias: 234},
            {nombre: "esparrago", tipo: "vegetales", calorias: 180},
            {nombre: "puerro", tipo: "vegetales", calorias: 232},
            {nombre: "apio", tipo: "vegetales", calorias: 150},
            {nombre: "espinaca", tipo: "vegetales", calorias: 432},
            {nombre: "rúcula", tipo: "vegetales", calorias: 235},
            {nombre: "coliflor", tipo: "vegetales", calorias: 215},
            {nombre: "brocoli", tipo: "vegetales", calorias: 355},                        
        ]  
        // console.log(alimentoDetipovegetal) 
        function clasificarDieta (alimentos, callback){

            setTimeout(function(){
                let alimentoDetipovegetal=alimentos.filter(function(alimento){
                    return(alimento.tipo = 'vegetal' && alimento.calorias > 200)
        
                })
                callback(alimentoDetipovegetal)
            },5000)
            
        }
    
        clasificarDieta(alimentos,function (alimentoDetipovegetal){
            let sumaCalorias = 0
            alimentoDetipovegetal.forEach(function(finalvegetal){
                sumaCalorias = sumaCalorias + finalvegetal.calorias
            })
            console.log(alimentoDetipovegetal)
            console.log("El total de calorias que debe de consumir es de: "+sumaCalorias)
        })
// llamamos la funcion 


