const url ='https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';

fetch(url)
    .then((response) => response.json())
    .then((data) => {
       
        let PokeURL;
        let array = data.results;
        console.log(data);
        console.log(data.results[0]);
        
        for (let i = 0; i < array.length; i++) {

            PokeURL = data.results[i].url
            console.log(PokeURL);

            fetch(PokeURL)
                .then((responsePOKE) => responsePOKE.json())
                .then((dataPOKE) => {
                
                    let sprite;
                    let namePOKE;
                    let abilityPOKE = [];
                    let localizacion = document.getElementById('pokeDEX');

                    sprite = dataPOKE.sprites.front_default;
                    console.log(sprite);

                    namePOKE = dataPOKE.name;
                    console.log(namePOKE);

                    dataPOKE.abilities.forEach(abilityObj => {
                        abilityPOKE.push(abilityObj.ability.name);
                    }); 

                    console.log(abilityPOKE);

                    localizacion.innerHTML += `
                        <div class="col">
                        <div class="card" style="width: 18rem">
                            <img src="${sprite}" class="card-img-top" alt="sprite ${namePOKE}" />
                            <div class="card-body">
                            <h5 class="card-title">${namePOKE}</h5>
                            <p id='habilidades' class="card-text">
                            |
                            ${abilityPOKE[0]}
                            |
                            ${abilityPOKE[1]}
                            |
                            </p>
                            <a target="_blank"
                            href="https://www.pokemon.com/es/pokedex/bulbasaur" class="btn btn-primary">Go Pokedex</a>
                            </div>
                        </div>
                        </div>
                    `
                   
            })
            }
    }) 
    .catch((err) => console.log(err));

/*
function imprimir() {
    let localizacion = document.getElementById('pokeDEX');

    let html = '';
    
    html += `
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="${sprite}" class="card-img-top" alt="sprite ${namePOKE}" />
            <div class="card-body">
              <h5 class="card-title">${namePOKE}</h5>
              <p class="card-text">
               
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
    `

    localizacion.innerHTML = html;
}

imprimir()
*/
/*
async function getPokemon() {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/');
    const res = await result.json();
    console.log(res);
};
getPokemon();
*/