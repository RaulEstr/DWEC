let boton = document.getElementById("submit");
boton.addEventListener("click", comprobar);

let regex = /^((0?[1-9])|([12][0-9])|(30))[\/-]((0?[1-9])|(1[0-2]))[\/-]((19|20)[0-9]{2})$/;
function comprobar(event) {
    event.preventDefault();
    let texto = document.getElementById("texto").value;
    let valido = regex.test(texto);

    if(valido) {
        alert("La cadena SI es correcta");
    }
    else{
        alert("La cadena NO es correcta");
    }
}

