// Acceso a contenedor para escribir
let contenedor = document.getElementById("contenedor");

function Receta() {
    this.nombre = "";
    this.tiempo = 0;
    this.tipo = "";
    this.ingredientes = [];

    this.crearReceta=function(nombre, tiempo, tipo, ingredientes) {
        this.nombre = nombre;
        this.tiempo = tiempo;
        this.tipo = tipo;
        this.ingredientes = ingredientes;
    }

    this.aniadirIngrediente=function(ingrediente) {
        this.ingredientes.push(ingrediente);
    }

    this.informacionReceta=function() {
        let cadena = "Nombre de la receta: " + this.nombre + "<br>";
        cadena += "Tiempo de la receta: " + this.tiempo + "minutos" + "<br>";
        cadena += "Tipo de receta: " + this.tipo + "<br>";
        cadena += "Ingredientes: "
        this.ingredientes.forEach((ingrediente)=> {
            cadena += ingrediente + ", ";
        })

        return cadena;
    }
}

let receta1 = new Receta();
receta1.crearReceta("Tarta de queso", 60, "postre",["600gr queso crema", "200ml nata", "3 huevos"]);

contenedor.innerHTML += "<p>" + receta1.informacionReceta() + "</p>";

receta1.aniadirIngrediente("100gr galletas");
contenedor.innerHTML += "<p>" + receta1.informacionReceta() + "</p>";


