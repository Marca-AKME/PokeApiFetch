const url ='https://pokeapi.co/api/v2/pokemon/1';
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let element = document.getElementById('DOMelement');
        element.innerHTML = `
        <p>${data.name}</p>
        <img src='${data.sprites.font_default}'/>
        <p>${data.weight}</p>
        `;
        console.log(data);
    })
    .catch((err) => console.log(err));
