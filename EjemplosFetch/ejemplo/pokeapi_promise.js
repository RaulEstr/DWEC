let but=document.getElementById("but");

function obtenerDatosPokemon(numero) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const url="https://pokeapi.co/api/v2/pokemon/"+numero;
      console.log(url);
      xhr.open('GET', url);
  
      xhr.onload = () => {
        if (xhr.status === 200) {
            //Aquí pasamos el pokemon entero
            resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error(`Error ${xhr.status}: ${xhr.statusText}`));
        }
      };
  
      xhr.send();
    });
  }


function buscar(ev){
    ev.preventDefault();
    const numero=document.getElementById("numero").value;
    let div=document.getElementById("infoPokemon");
    div.innerHTML="";
    let datos="";
    obtenerDatosPokemon(numero)
        .then(pokemon => {
            //Hemos recibido la estructura completa
            datos+="<p>Pokemon: "+pokemon.name+"</p>";
            datos+="Habilidades:<br>"
            for (let i = 0; i < pokemon.abilities.length; i++) {
                datos+=pokemon.abilities[i].ability.name+"<br>";
            }

            div.innerHTML=datos;

            let img=document.createElement('img');
            img.src=pokemon.sprites.front_default;
            let img2=document.createElement('img');
            img2.src=pokemon.sprites.back_default;
            div.appendChild(img);
            div.appendChild(img2);
            })

        .catch(error => {
            console.error('Error:', error.message);
            });
}
but.addEventListener("click", buscar);
