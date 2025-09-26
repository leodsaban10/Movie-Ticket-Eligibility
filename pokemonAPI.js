
let allPokemon = [];
let currentIndex = 0;

async function fetchAllPokemon() {
    try {
       const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
       const data = await response.json();
       allPokemon = data.results;
       return data.results;
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
    const nameElement = document.getElementById('pokemon-name');
    const imageElement = document.getElementById('pokemon-image');
    
    nameElement.textContent = pokemon.name;
    imageElement.src = pokemon.sprites.front_default;
    imageElement.alt = `${pokemon.name} sprite`;
    imageElement.style.display = 'block';
}

function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    prevButton.disabled = currentIndex <= 0;
    nextButton.disabled = currentIndex >= allPokemon.length - 1;
}

async function showPokemonAtIndex(index) {
    if (index >= 0 && index < allPokemon.length) {
        currentIndex = index;
        const pokemon = allPokemon[currentIndex];
        const details = await fetchPokemonDetails(pokemon.name);
        if (details) {
            displayPokemonDetails(details);
        }
        updateNavigationButtons();
    }
}

// Initialize the page
fetchAllPokemon().then(pokemon => {
    if (pokemon && pokemon.length > 0) {
        showPokemonAtIndex(0);
        document.getElementById('loading').style.display = 'none';
    }
});

// Add event listeners for navigation buttons
document.getElementById('next-button').addEventListener('click', () => {
    showPokemonAtIndex(currentIndex + 1);
});

document.getElementById('prev-button').addEventListener('click', () => {
    showPokemonAtIndex(currentIndex - 1);
});

