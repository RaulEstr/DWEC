function tipoLetras() {
    event.preventDefault();

    // Cojo el valor del input texto
    let texto = document.getElementById("texto").value;
    
    // Compruevo si el campo no esta vacio
    if(texto.trim().length == 0) {
        document.write("<br> No has introducido ningún texto");
    }
    else {
        // Creo las cadenas de comparacion
        let textoUpper = texto.toUpperCase();
        let textoLower = texto.toLowerCase();

        // Abro la ventana
        let ventana = window.open("nuevaVentana.html", "","width=500,height=500");

        // Comparo la cadena y escribo en la nueva ventana el resutlado
        if(texto == textoUpper) {
            ventana.document.write("<br>El texto introducido está entero en mayúsculas");
        } else if(texto == textoLower) {

            ventana.document.write("<br>El texto introducido está entero en minúsculas");
        }
        else {
            ventana.document.write("<br>El texto introducido es una mezcla de mayúsculas y minúsculas");
        }

        // Meto un boton para cerrar la ventana
        ventana.document.write("<br><button onClick=\"window.close()\">Cerrar</button>")
    }

   
}