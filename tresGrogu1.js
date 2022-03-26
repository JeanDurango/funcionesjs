  
    let alimetos = ["pollo","cerdo","pavo","res","pescado","lechuga","zanahoria","manzana","uvas","grillos","mariposas","cucarachas","gusanos"]
    
    let alimentosVegetales = []

    for(let i=0; i<=50; i++){
       
        
        let alimentoVegetal ={}

        alimentoVegetal.nombre =alimetos[Math.floor(Math.random() * alimetos.length)]
        alimentoVegetal.calorias = Math.floor(Math.random() * (500 - 100) + 100 )
        
        alimentosVegetales.push(alimentoVegetal)
    }
    // console.log(alimentosVegetales)

function clasificarDieta (alimentosVegetales, callback){

    setTimeout(()=>{
       let totaltipovegetales = alimentosVegetales.filter((vegetales)=>{
            return(vegetales.nombre ===('lechuga','espicana','berebjena') && vegetales.calorias >= 200)

        })
        callback(totaltipovegetales)
    },2000)
    
}

clasificarDieta(alimentosVegetales,function (totaltipovegetales){
    let sumaCalorias = 0
    totaltipovegetales.forEach(function(finalvegetal){
        sumaCalorias = sumaCalorias + finalvegetal.calorias
    })
    console.log(totaltipovegetales)
    console.log("El total de calorias que debe de consumir es de: "+sumaCalorias)
})