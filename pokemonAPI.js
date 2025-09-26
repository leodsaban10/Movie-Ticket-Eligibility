
async function fetchPokemon() {
    try {
       const response = await fetch("https://pokeapi.co/api/v2/pokemon")
       const pokemon = await response.json()
        return pokemon.results;
    } catch(error) {
        console.log(error);
    }
}

async function fetchPokemonDetails(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const pokemonDetails = await response.json();
        return pokemonDetails;
    } catch(error) {
        console.log('Error fetching Pokemon details:', error);
    }
}

function displayPokemonDetails(pokemon) {
    const detailsDiv = document.getElementById('pokemon-details');
    const nameElement = document.getElementById('pokemon-name');
    const imageElement = document.getElementById('pokemon-image');
    
    nameElement.textContent = pokemon.name;
    imageElement.src = pokemon.sprites.front_default;
    imageElement.alt = `${pokemon.name} sprite`;
    
    detailsDiv.style.display = 'block';
}

fetchPokemon().then(pokemon => {
    const list = document.getElementById('pokemon-list');
    pokemon.forEach(poke => {
        const item = document.createElement('div');
        item.className = 'pokemon-item';
        item.textContent = poke.name;
        
        // Add click event listener
        item.addEventListener('click', async () => {
            const details = await fetchPokemonDetails(poke.name);
            if (details) {
                displayPokemonDetails(details);
            }
        });
        
        list.appendChild(item);
    });
});

