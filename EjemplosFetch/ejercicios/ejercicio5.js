
const url="http://localhost:3000/recetas";

const nuevaReceta ={
    "nombre": "Tortilla de patata", 
    "tipo": "Espanola", 
    "ingredientes": ["patata", "cebolla", "AOVE", "sal"],
    "dificultad": "media"
}

fetch(url,{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevaReceta)
})
    .then(respuesta => {
        console.log(respuesta);
        if(!respuesta.ok){
            throw new Error("Ha habido un error");
        }else{
            return respuesta.json();
        }
    })
    // .then(respuesta=>respuesta.json())
    .then(datos => {
        console.log(datos);
    })
    .catch(error=>{
        console.log(error);
    })