// Referencia al div de la pagina
let contenido = document.getElementById("contenido");

function validar() {
    // Texto introducido en el input
    texto = document.getElementById("texto").value;

    // Si hay texto, se crea la tabla
    if(texto.length > 0) {
        // Creacion base de la tabla y las dos lineas con los titulos en la primera columna
        let tabla = document.createElement("table");
        let linea1 = document.createElement("tr");
        let linea2 = document.createElement("tr");
        let titulo1 = document.createElement("td");
        let titulo2 = document.createElement("td");

        contenido.appendChild(tabla);
        tabla.appendChild(linea1);
        tabla.appendChild(linea2);
        linea1.appendChild(titulo1);
        linea2.appendChild(titulo2);
        titulo1.textContent = "Posición";
        titulo2.textContent = "Contenido";

        // Estilos de la tabla y lineas
        tabla.style.borderCollapse = "collapse";
        tabla.style.border = "1px solid black";
        tabla.style.margin = "5px";
        tabla.style.padding = "5px";
        linea1.style.border = "1px solid black";
        linea1.style.margin = "5px";
        linea1.style.padding = "5px";
        linea2.style.border = "1px solid black";
        linea2.style.margin = "5px";
        linea2.style.padding = "5px";

        // Se recorre el texto y por cada letra se añade una columna a la tabla
        for(let i = 0; i < texto.length; i++) {
            let posicion = document.createElement("td");
            linea1.appendChild(posicion);
            posicion.textContent = i;

            let contenido = document.createElement("td");
            linea2.appendChild(contenido);
            contenido.textContent = texto[i];

            // Estilos de las celdas
            posicion.style.border = "1px solid black";
            posicion.style.margin = "5px";
            contenido.style.margin = "5px";

            contenido.style.border = "1px solid black";
            posicion.style.padding = "5px";
            contenido.style.padding = "5px";
        }
        // Un br para que cada tabla aparezca en una linea nueva
        contenido.appendChild(document.createElement("br"));
    }
    
}