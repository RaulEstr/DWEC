let contenido = document.getElementById("contenido");

function mostarArray(unarray) {
    let cadena = "";
    unarray.forEach(elemento => {
        if(typeof(elemento) == "string") {
            cadena += "\"" + elemento + "\",";
        }
        else {
            cadena += elemento + ",";
        }
    });
    return cadena;
}

let array1 = new Array("Rojo", "Verde", "Azul");
let array2 = new Array("70", "9", "800");
let array3 = new Array(50,10,2,300);
let array4 = new Array("70", "9", "800",30,10,5,400);

contenido.innerHTML += "<p>Array1: " + mostarArray(array1) + "</p>";
contenido.innerHTML += "<p>Array2: " + mostarArray(array2) + "</p>";
contenido.innerHTML += "<p>Array3: " + mostarArray(array3) + "</p>";
contenido.innerHTML += "<p>Array4: " + mostarArray(array4) + "</p>";