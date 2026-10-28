// 1.	Crear un <div> con algún texto y, usando textContent, cambiarlo por otro texto.
//Accedo al div
let miDiv=document.getElementById("miDiv");

console.log(miDiv);
console.log(miDiv.textContent);

//modifico el textContent
miDiv.textContent="Este es el contenido modificado."
console.log(miDiv);