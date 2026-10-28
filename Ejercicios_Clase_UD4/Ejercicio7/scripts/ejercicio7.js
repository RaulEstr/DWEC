// Acceso a contenedor para escribir
let contenedor = document.getElementById("contenedor");

// Objeto en forma function
function Producto_alimenticio(cod, nom, precio) {
    this.codigo = cod;
    this.nombre = nom;
    this.precio = precio;

    // Funcion para sacar los datos por pantalla
    this.imprimeDatos=function() {
        let cadena = "<p>Codigo: " + this.codigo + "<br>";
        cadena += "Nombe: " + this.nombre + "<br>";
        cadena += "Con precio: " + this.precio + "€</p>";
        contenedor.innerHTML += cadena;
    }
}

// Objeto en forma class
class ProductoAlimenticio {
    constructor(cod, nom, precio) {
        this.codigo = cod;
        this.nombre = nom;
        this.precio = precio;
    }

    imprimeDatos() {
        let cadena = "<p>Codigo: " + this.codigo + "<br>";
        cadena += "Nombe: " + this.nombre + "<br>";
        cadena += "Con precio: " + this.precio + "€</p>";
        contenedor.innerHTML += cadena;
    }
}

// Se pueden crear objetos de distintas formas hasta
let producto1 = new Producto_alimenticio("AAAA", "Pan", 1);

let producto2 = new Producto_alimenticio();
producto2.codigo = "BBBB";
producto2.nombre = "Agua";
producto2.precio = 1.5;

let producto3 = new Producto_alimenticio("CCCC");
producto3.nombre = "Harina";
producto3.precio = 3;

let productos = [];
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
// productos.forEach(producto => {
//     producto.imprimeDatos();
// });
for(let i = 0; i < productos.length; i++) {
    productos[i].imprimeDatos();
}


let producto4 = new ProductoAlimenticio("DDDD", "CocaCocla", 0.5);

let producto5 = new ProductoAlimenticio();
producto5.codigo = "EEEE";
producto5.nombre = "Pepsi";
producto5.precio = 0.6;

let producto6 = new ProductoAlimenticio("FFFF");
producto6.nombre = "Monster";
producto6.precio = 1.5;

let productos2 = [];
productos2.push(producto4);
productos2.push(producto5);
productos2.push(producto6);
productos2.forEach(producto => {
    producto.imprimeDatos();
});
// for(let i = 0; i < productos2.length; i++) {
//     productos2[i].imprimeDatos();
// }