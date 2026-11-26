let but=document.getElementById("but");
    
function buscar(ev){
    ev.preventDefault();
    const numero=document.getElementById("numero").value;
    let div=document.getElementById("infoPokemon");
    div.innerHTML="";
    let datos="";

    // const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
    const url = "https://pokeapi.co/api/v2/pokemon/" + numero;
    console.log(url);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            return response.json(); // Devuelve el JSON parseado
        })
        .then(pokemon=>{
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
