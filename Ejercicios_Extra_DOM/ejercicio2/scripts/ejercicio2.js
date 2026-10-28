// Funcion que se ejecuta al pulsar el boton AGREGAR EN POSICION de la pagina
function agregarEn() {
    // Cojo los elementos de la pagina mediante sus IDs
    let texto = document.getElementById("texto");
    let error = document.getElementById("error");
    let lista = document.getElementById("lista");
    let posicion = document.getElementById("posicion");

    // Compruebo que lo introducido por el usuario es correcto
    if(texto.value.trim() == "" || posicion.value == "") {
        error.innerHTML = "El texto y la posicion no pueden estar vacios"
    }
    else if(parseInt(posicion.value) < 1 || posicion.value > 1) {

    }
    else {
        // Creo el nuevo elemento <li> a insertar
        let li = document.createElement("li");
        let text = document.createTextNode(texto.value);
        li.appendChild(text);

        // Añado el elemento <li> a la lista en la posicion indicada por el usuario y dejo los inputs vacios
        elementos = lista.children;
        lista.insertBefore(li, elementos[parseInt(posicion.value) - 1]);

        posicion.value = "";
        texto.value = "";
    }
}

// Funcion que se ejecuta al pulsar el boton AGREGAR AL FINAL de la pagina
function agregarFinal() {
    // Cojo los elementos de la pagina mediante sus IDs
    let texto = document.getElementById("texto");
    let error = document.getElementById("error");
    let lista = document.getElementById("lista");

    // Compruebo que lo introducido por el usuario es correcto
    if(texto.value.trim() == "") {
        error.innerHTML = "El texto no puede estar vacio"
    }
    else {
        // Añado <li> al final de la lista y dejo el input vacio
        error.innerHTML = "";
        lista.innerHTML += "<li>"+texto.value+"</li>"
        texto.value = "";
    }
}