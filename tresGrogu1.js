  
 
  let nombres = ["pollo","cerdo","pavo","res","lechuga","berenjena","aji","tomate","mariposas","grillos","gusanos","lombris"]
  let tipos = ["animales","vegetales","insectos"]
  let alimentos = []
  
 for(let i=0; i<=1000; i++){  
       let alimento={}
       alimento.nombre = nombres [Math.floor(Math.random() * nombres.length)]
       if (alimento.nombre == "pollo"  || alimento.nombre == "cerdo" ||  alimento.nombre == "pavo" || alimento.nombre ==  "res"){
           alimento.tipo = "animales"
       }else if(alimento.nombre == "tomate"  || alimento.nombre == "aji" ||  alimento.nombre == "berenjena" || alimento.nombre ==  "lechuga"){
           alimento.tipo = "vegetales"
       }else{
           alimento.tipo = "insectos"
       }
       alimento.calorias = Math.floor(Math.random() * 500)     
       alimentos.push(alimento)
       
   }
   

function clasificarDieta (alimentos,callback){
 setTimeout(()=>{
    let totalalimentosvegetales = alimentos.filter((alimento)=>{
     return(alimento.tipo ==  "vegetales" && alimento.calorias >= 200)

       })
       callback(totalalimentosvegetales)
   },5000)  
}

clasificarDieta(alimentos,function (totalalimentosvegetales){
   let sumaCalorias = 0
   totalalimentosvegetales.forEach(function(finalvegetal){
       sumaCalorias = sumaCalorias + finalvegetal.calorias
   })
   console.log(totalalimentosvegetales)
   console.log("El total de calorias que debe de consumir es de: "+sumaCalorias)
})