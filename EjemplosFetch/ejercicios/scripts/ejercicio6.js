let url = "http://localhost:3000/recetas";

console.log("PUUUUUUUUUUUUUUUUUUUUUUUT")
let receta = {
    "nombre":"Pollo con verduras",
    "tipo":"Generica",
    "ingredientes": [
        "Pollo",
        "Verduras"
    ],
    "dificultad":"media"
}
fetch(url + "/5", {
    method: "PUT",
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
