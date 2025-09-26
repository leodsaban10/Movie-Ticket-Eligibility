
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
    
    // Create or update the content container for side-by-side layout
    let contentContainer = document.getElementById('pokemon-content');
    if (!contentContainer) {
        contentContainer = document.createElement('div');
        contentContainer.id = 'pokemon-content';
        
        // Move the image into the content container
        contentContainer.appendChild(imageElement);
        
        // Create details container
        const detailsContainer = document.createElement('div');
        detailsContainer.id = 'pokemon-additional-details';
        contentContainer.appendChild(detailsContainer);
        
        // Add the content container to the pokemon-details div
        document.getElementById('pokemon-details').appendChild(contentContainer);
    }
    
    // Get the details container
    const detailsContainer = document.getElementById('pokemon-additional-details');
    
    // Get Pokemon types
    const types = pokemon.types.map(type => type.type.name).join(', ');
    
    // Convert height from decimeters to feet/inches and meters
    const heightInMeters = (pokemon.height / 10).toFixed(1);
    const heightInFeet = Math.floor(pokemon.height * 3.937 / 12);
    const heightInInches = Math.round((pokemon.height * 3.937) % 12);
    
    // Convert weight from hectograms to pounds and kg
    const weightInKg = (pokemon.weight / 10).toFixed(1);
    const weightInLbs = (pokemon.weight * 0.22046).toFixed(1);
    
    detailsContainer.innerHTML = `
        <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
            <p><strong>Type:</strong> ${types}</p>
            <p><strong>Height:</strong> ${heightInMeters}m (${heightInFeet}'${heightInInches}")</p>
            <p><strong>Weight:</strong> ${weightInKg}kg (${weightInLbs}lbs)</p>
            <p><strong>Base Experience:</strong> ${pokemon.base_experience}</p>
        </div>
    `;
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

