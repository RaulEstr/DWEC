// Referencia al contenedor
let contenedor = document.getElementById("contenedor");

// constante con URL
const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

// Fetch get
fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(resultado => resultado.drinks[0]) // Cojo solamente el primer "drinks" de respuesta
    .then(bebida => {
        // Guardo los datos
        let nombre = bebida.strDrink;
        let ing1 = bebida.strIngredient1;
        let ing2 = bebida.strIngredient2;
        let ing3 = bebida.strIngredient3;
        let imagen = bebida.strDrinkThumb;

        // Creo los elementos
        let img = document.createElement("img");
        let h2 = document.createElement("h2");
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let p = document.createElement("p");
        p.textContent = "Ingredientes: ";
        img.setAttribute("src", imagen);
        h2.textContent = nombre;
        li1.textContent = ing1;
        li2.textContent = ing2;
        li3.textContent = ing3;

        // Añado los elementos al dom
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        contenedor.classList.add("bebida")
        contenedor.appendChild(img);
        contenedor.appendChild(h2);
        contenedor.appendChild(p);
        contenedor.appendChild(ul);
    })