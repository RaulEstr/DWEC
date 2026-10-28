// 1. Referencia al div
let contenedor = document.getElementById('div');

// 2. Creamos el elemento <p>
let parrafo = document.createElement('p');

// parrafo.textContent='Texto de ejemplo';
// 3. Creamos un nodo de texto
let texto = document.createTextNode('Texto de ejemplo');

// 4. Añadimos el nodo de texto al <p>
parrafo.appendChild(texto);

// 5. Insertamos el <p> dentro del div
contenedor.appendChild(parrafo);

console.log(contenedor)