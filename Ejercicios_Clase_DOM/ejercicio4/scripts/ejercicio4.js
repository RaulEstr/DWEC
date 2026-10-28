// 4.	Crea un <ul> y añade dinámicamente tres <li>. Inserta un <li> 
// en la segunda posición. Elimina un <li>.
//accedo al Ul
let miUl=document.querySelector("ul");
console.log(miUl);

//Creo el primer li
let primerLi=document.createElement("li");
//Añado contenido al li para poder verlo en mi página
primerLi.innerHTML="Primer li";
//Cuelgo el li de su ul padre
miUl.appendChild(primerLi);

//Creo el segundo li
let segundoLi=document.createElement("li");
//Añado contenido al li para poder verlo en mi página
segundoLi.innerHTML="Segundo li";
//Cuelgo el li de su ul padre
miUl.appendChild(segundoLi);

//Creo el tercer li
let tercerLi=document.createElement("li");
//Añado contenido al li para poder verlo en mi página
tercerLi.innerHTML="Tercer li";
//Cuelgo el li de su ul padre
miUl.appendChild(tercerLi);

//Creo el tercer li
let liInsertado=document.createElement("li");
//Añado contenido al li para poder verlo en mi página
liInsertado.innerHTML="Este li lo inserto en la segunda posición";
miUl.insertBefore(liInsertado,miUl.children[1]);

//Eliminamos un hijo
miUl.removeChild(miUl.childNodes[1]);