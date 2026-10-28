// Funcion que se ejecuta cuando se pulsa el boton "Copiar..." de la pagina
function cambiar() {
    // Cojo los dos imputs de la pagina
    let texto1 = document.getElementById("texto1");
    let texto2 = document.getElementById("texto2");

    // Le pongo a texto2 el valor de texto1 dejo texto1 vacio
    texto2.value = texto1.value;
    texto1.value = "";
}