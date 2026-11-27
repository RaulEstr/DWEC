const url = "http://localhost:3000/recetas";
let receta = {
    "nombre":"Colacao",
    "tipo":"Española",
    "ingredientes": [
        "Colacao",
        "Leche"
    ],
    "dificultad":"baja"
}

fetch(url, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body:JSON.stringify(receta)
})
.then(response => {
    if(!response.ok){
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return response.json();
})
.then(datos => console.log(datos))
.catch(error => console.error(error))