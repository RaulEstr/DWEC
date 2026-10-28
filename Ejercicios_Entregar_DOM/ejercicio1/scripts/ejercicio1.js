// Guardo el bodu para escribir en el
let body = document.body;

// Guardo en una lista todos los elementos <a> y visualizo la cantidad
let enlaces = document.getElementsByTagName("a");
body.innerHTML += "<p>Número de enlaces de la página: "+ enlaces.length +"</p>";

// Guardo el valor del atributo href del penultimo enlace y lo visualizo
let atributoHref = enlaces[enlaces.length - 2].getAttribute("href");
body.innerHTML += "<p>Dirección a la que enlaza el penúltimo enlace: "+ atributoHref +"</p>";

// Recorro la lista de enlaces y sumo al contador cuando el valor del atributo href sea igual que la variable enlace y lo visualizo
let contPrueba = 0;
let enlace = "http://prueba";
for(let i = 0; i < enlaces.length; i++) {
    if(enlaces[i].getAttribute("href") == enlace) {
        contPrueba++
    }
}
body.innerHTML += "<p>Numero de enlaces que enlazan a http://prueba: "+ contPrueba +"</p>";

// Guardo en una lista los elementos <p> y en otra los elementos <a> del tercer <p> y lo visualizao
let parrafos = document.getElementsByTagName("p");
enlaces = parrafos[2].getElementsByTagName("a");
body.innerHTML += "<p>Número de enlaces del tercer párrafo "+ enlaces.length +"</p>";
