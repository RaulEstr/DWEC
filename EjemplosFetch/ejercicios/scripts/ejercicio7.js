let url = "http://localhost:3000/recetas";

console.log("PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATCH")
let receta = {
    "dificultad":"UWU"
}
fetch(url + "/6", {
    method: "PATCH",
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
