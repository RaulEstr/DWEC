// Referencia al contenedor
let contenedor = document.getElementById("contenedor");

// constante con URL
const url = "https://rickandmortyapi.com/api/character";

// Fetch get
fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(resultado => resultado.results) // Cojo solamente la parte "results" de respuesta
    .then(personajes => {
        // Foreach de cada personaje
        personajes.forEach(personaje => {
            // Guardo los datos
            let nombre = personaje.name;
            let especie = personaje.species;
            let imagen = personaje.image;

            // Creo los elementos
            let img = document.createElement("img");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
            img.setAttribute("src", imagen);
            h2.textContent = nombre;
            p.textContent = "Especie: " + especie;

            // Añado los elementos al dom
            let divPersonaje = document.createElement("div");
            divPersonaje.classList.add("personaje")
            divPersonaje.appendChild(img);
            divPersonaje.appendChild(h2);
            divPersonaje.appendChild(p);
            contenedor.appendChild(divPersonaje);
        });
    })