// 2.	Crear un <div> con algún texto y, usando innerHTML, añadir 
// dentro un <span> en negrita.

//Accedo al div
let miDiv=document.getElementById("miDiv");

console.log(miDiv);
console.log(miDiv.innerHTML);

//Añado span con texto en negrita
miDiv.innerHTML+="<span><b>Texto añadido</b></span>"
console.log(miDiv);
console.log(miDiv.innerHTML);