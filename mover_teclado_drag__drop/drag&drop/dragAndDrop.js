//Accedo a la capa
capa=document.getElementById("capa");

//Añado listeners a la capa
capa.addEventListener("mousedown", drag);
capa.addEventListener("mouseup", drop);

//variables para guardar la posicion del raton
let ratonX;
let ratonY;

//Añado handlers a los listeners
function drag(ev){
    console.log("Has pinchado");
    //Añado evento de mousemove
    document.addEventListener("mousemove", mover);
    //Guardo la posicion del raton
    ratonX=ev.clientX;
    ratonY=ev.clientY;
}
function drop(ev){
    console.log("Has soltado");
    //Elimino evento de mousemove
    document.removeEventListener("mousemove", mover);
}
function mover(ev){
    console.log("Moviendo");
    //actualizo top y left con la variacion de posicion de clientX/clientY
    let posXcapa=parseInt(capa.style.left)+ev.clientX-ratonX;
    capa.style.left=posXcapa+"px";
    let posYcapa=parseInt(capa.style.top)+ev.clientY-ratonY;
    capa.style.top=posYcapa+"px";
    //Actualizo posicion del raton
    ratonX=ev.clientX;
    ratonY=ev.clientY;
}