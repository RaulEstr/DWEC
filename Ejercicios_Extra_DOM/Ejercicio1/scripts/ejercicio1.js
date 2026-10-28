// Funcion que se llama al pulsar el boton POSICION EN CHILDREN de la ventana
function posEnChildren() {
    // Obtengo el elemento <ul> mediante su ID y de este saco sus elementos hijos
    let lista = document.getElementById("lista");
    let elementos = lista.children;

    // Recorro los elementos hijos y a cada uno le pongo "Elemento X" siendo X su numero
    for(let i = 0; i < lista.childElementCount; i++) {
        elementos[i].textContent = "Elemento " + (i+1);
    }
}

function posEnChildNodes() {
    let lista = document.getElementById("lista");
    let elementos = lista.childNodes;
    for(let i = 0; i < lista.childElementCount; i++) {
        elementos[i].textContent = "Elemento " + (i+1);
    }
}