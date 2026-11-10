let contenedor = document.getElementById("contenedor");

for(let i = 0; i < 25; i++) {
    let circulo = document.createElement("div");
    circulo.classList.add("circulo");
    circulo.style.display = "inline-block";

    if(i % 5 == 0){
        contenedor.appendChild(document.createElement("br"));
    }

    contenedor.appendChild(circulo);

    circulo.addEventListener("click", ()=> {
        if(circulo.classList.contains("rojo")) {
            alert("HAS GANADO")
        }
    });
}

intervalID = setInterval(cambiar, 100);

function cambiar() {
    circulos = contenedor.children;
    let random = Math.floor(Math.random() * circulos.length);
    for(let i = 0; i < circulos.length; i++) {
        if(circulos[i].classList.contains("rojo")) {
            circulos[i].classList.remove("rojo");
            
        }

        if(i == random) {
            circulos[i].classList.add("rojo");
        }
        else {
            circulos[i].classList.add("gris");
        }
    }
}