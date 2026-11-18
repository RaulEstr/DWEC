import {setCookie, getCookie} from "../../cookies.js"

let boton = document.getElementById("boton");

let cookieTema = getCookie("tema");
switch (cookieTema) {
    case "claro":
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        boton.style.color = "black";
        boton.style.border = "1px solid black";
        boton.style.backgroundColor = "white";
        break;
    case "oscuro":
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        boton.style.color = "white";
        boton.style.border = "1px solid white";
        boton.style.backgroundColor = "black";
        break;
}

let cookieTamanio = getCookie("tamanio");
switch (cookieTamanio) {
    case "pequenio":
        document.body.style.fontSize = "1em";
        boton.style.fontSize = "1em";
        break;
    case "mediano":
        document.body.style.fontSize = "1.5em";
        boton.style.fontSize = "1.5em";
        break;
    case "grande":
        document.body.style.fontSize = "2em";
        boton.style.fontSize = "2em";
        break;
}


boton.addEventListener("click", (event) => {
    event.preventDefault();
    if(document.getElementById("claro").checked) {
        setCookie("tema", "claro", 1);
    }

    if(document.getElementById("oscuro").checked) {
        setCookie("tema", "oscuro", 1);
    }

    if(document.getElementById("pequenio").checked) {
        setCookie("tamanio", "pequenio", 1);
    }
    if(document.getElementById("mediano").checked) {
        setCookie("tamanio", "mediano", 1);
    }
    if(document.getElementById("grande").checked) {
        setCookie("tamanio", "grande", 1);
    }
    
    location.reload();
});