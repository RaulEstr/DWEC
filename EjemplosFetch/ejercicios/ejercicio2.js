document.addEventListener("DOMContentLoaded", () => {
    let miDiv=document.getElementById("miDiv");

    const url="https://rickandmortyapi.com/api/character";

    fetch(url)
        // .then(response => response.json())
        .then(response => {
            if(!response.ok){
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        // .then(datosJson=>{
        //     console.log(datosJson)
        //     return datosJson.results
        // })
        .then(datosJson=>datosJson.results)
        .then(personajes =>{
            console.log(personajes);
            for(let i=0; i<personajes.length;i++){
                let divPersonaje = document.createElement("div");
                divPersonaje.innerHTML=`
                    <b>${personajes[i].name}</b><br>
                    Especie: ${personajes[i].species}<br>
                `;
                let img=document.createElement('img');
                img.src=personajes[i].image;
                img.setAttribute("width", "50");
                divPersonaje.appendChild(img);

                miDiv.appendChild(divPersonaje);
            };
        })
        .catch(error=>{
            console.log(error);
        })

});