
async function fetchPokemon() {
    try {
       const response = await fetch("https://pokeapi.co/api/v2/pokemon")
       const pokemon = await response.json()
        return pokemon.results;
    } catch(error) {
        console.log(error);
    }
}
fetchPokemon().then(pokemon => {
    const list = document.getElementById('pokemon-list');
    pokemon.forEach(p => {
        const item = document.createElement('div');
        item.textContent = p.name;
        list.appendChild(item);
    });
});

