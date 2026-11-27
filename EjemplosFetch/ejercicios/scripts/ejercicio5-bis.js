let url = "http://localhost:3000/recetas";
let idReceta = null;

console.log("GEEEEEEEEEEEEEEEEEEET");
fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(datos=> {
        console.log(datos)
        idReceta = datos.length + 1;
        console.log(idReceta);
        peticionPost();
    })
    .catch(error => console.error(error));



function peticionPost() {
    console.log("POOOOOOOOOOOOOOOOOOOOOOOOOOOOST")
    let receta = {
        "id":idReceta,
        "nombre":"Pollo guisado",
        "tipo":"Generica",
        "ingredientes": [
            "Pollo",
            "Verduras"
        ],
        "dificultad":"media"
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
}