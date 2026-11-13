//Accedo a los elementos
let capa=document.getElementById("capa");

//Añado listeners a los botones
document.addEventListener("keydown",mover)

//handlers de los listeners
function mover(ev){
    console.log(ev.key)
    if(ev.key=="ArrowDown"){
        abajo();
        return;
    }
    if(ev.key=="ArrowUp"){
        arriba();
        return;
    }
    if(ev.key=="ArrowLeft"){
        izquierda();
        return;
    }
    if(ev.key=="ArrowRight"){
        derecha();
        return;
    }
}

function arriba(){
    //Modificar posicion: top y left
    let nuevoTop=parseInt(capa.style.top)-5;
    if(nuevoTop<0){
        nuevoTop=0;
    }
    capa.style.top=nuevoTop+"px"
}
function izquierda(){
    //Modificar posicion: top y left
    let nuevoLeft=parseInt(capa.style.left)-5;
    if(nuevoLeft<0){
        nuevoLeft=0;
    }
    capa.style.left=nuevoLeft+"px"

}
function derecha(){
    //Modificar posicion: top y left
    let nuevoLeft=parseInt(capa.style.left)+100;
    console.log(capa.style.left)
    if(nuevoLeft>(screen.availWidth-parseInt(capa.style.width))){
        nuevoLeft=screen.availWidth-parseInt(capa.style.width);
    }
    capa.style.left=nuevoLeft+"px"

}
function abajo(){
    //Modificar posicion: top y left
    let nuevoTop=parseInt(capa.style.top)+100;
    console.log(nuevoTop)
    console.log(screen.availHeight);
    console.log(screen.availHeight-parseInt(capa.style.height))
    if(nuevoTop>(screen.availHeight-parseInt(capa.style.height))){
        nuevoTop=screen.availHeight-parseInt(capa.style.height);
    }
    capa.style.top=nuevoTop+"px"

}