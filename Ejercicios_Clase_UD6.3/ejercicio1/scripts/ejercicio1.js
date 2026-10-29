let boton = document.getElementById("submit");
boton.addEventListener("click", comprobar);
function comprobar(event) {
    event.preventDefault();
    let texto = document.getElementById("hola").value;
    let valido = /^Hola\s|\s[hH]ola\s|\s[hH]ola$/.test(texto);

    if(valido) {
        alert("La cadena SI contiene la palabra hola");
    }
    else{
        alert("La cadena NO contiene la palabra hola");
    }
}

