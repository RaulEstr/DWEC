/*
    Obtén del div "contenedor":
    a)	El primer hijo con firstChild
    b)	El primer elemento con firstElementChild
    c)	La lista completa de hijos con children

*/

//Accedo al div
// let miDiv=document.querySelector("#contenedor");
// let miDiv=document.querySelector("div");
let miDiv=document.getElementById("contenedor");
console.log(miDiv);

let primerHijo=miDiv.firstChild;
console.log(primerHijo);
let primerElemento=miDiv.firstElementChild;
console.log(primerElemento);
console.log("--------------------------")
let listaHijos=miDiv.children;
console.log(listaHijos);
let listaChildNodes=miDiv.childNodes;
console.log(listaChildNodes);