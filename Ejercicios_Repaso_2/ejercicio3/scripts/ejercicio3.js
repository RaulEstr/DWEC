let lista = document.getElementById("lista");
let capa = document.getElementById("capa");

//objeto Producto
function Producto(nombre,precio,categoria){
    this.nombre=nombre;
    this.precio=precio;
    this.categoria=categoria;
}
//Creo un array de productos
const productos=[
    new Producto("Pantalón", "40€", "ropa"),
    new Producto("Camiseta", "25€", "ropa"),
    new Producto("Gafas de sol", "100€", "accesorios"),
    new Producto("Bolso", "50€", "accesorios"),
    new Producto("Botas", "90€", "calzado")
];

// Guardo en un array las categorias
let categorias = [];
productos.forEach(producto => {
    if(!categorias.includes(producto.categoria)) {
        categorias.push(producto.categoria)
    }
});

// Crear el select con una opcion por defecto que sea "Todos" y con una opcion por categoria
let select = document.createElement("select");
let option = document.createElement("option");
option.value = "todos";
option.textContent = "Todos";
option.selected = "selected";
select.appendChild(option);

categorias.forEach(categoria => {
    let option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
    select.appendChild(option)
});
capa.appendChild(select);

// Le añado el evento change al select
select.addEventListener("change", ()=>{
    generarLista(select.value);
})

// Funcion que crea una lista u otra dependieno de la categoria seleccionada
function generarLista(categoria) {
    lista.innerHTML = "";
    productos.forEach(producto => {
        if(producto.categoria == categoria || categoria == "todos") {
            let li = document.createElement("li");
            li.textContent = producto.nombre + " - " + producto.precio + " - " + producto.categoria;
            lista.appendChild(li);
        }      
    });
}

// Genero la lista con todas las entradas
generarLista("todos");