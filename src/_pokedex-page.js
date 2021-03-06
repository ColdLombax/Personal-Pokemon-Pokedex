import { newElement } from "./_functions";

export function loadPokedex() {
   createElements();
}

const content = document.querySelector('.content');

function createElements() {
    // MAIN TOPBAR/SEARCH
    content.classList.add('pokedex-page');

    const navbarCircle = newElement('div', 'navbar-circle');
    content.appendChild(navbarCircle);

    const searchBar = newElement('input', 'search-bar');
    searchBar.placeholder = 'Search...'
    searchBar.type = 'text';
    searchBar.id = 'search-bar';
    searchBar.addEventListener('keyup', search);
    content.appendChild(searchBar);

    const pokeballContainer = newElement('div', 'pokeball-link');
    content.appendChild(pokeballContainer);

    // POKEBALL
    const pokeballImage = document.createElement('img');
    pokeballImage.src = "../images/pokeball-icon-main.svg";
    pokeballImage.alt = 'pokeball icon';
    pokeballContainer.appendChild(pokeballImage);
    pokeballAnimation(pokeballImage);


    // GRID
    const gridContainer = newElement('div', 'grid-container');
    content.appendChild(gridContainer);

    // FETCHING NAME DATA FROM POKEAPI
    const firstGenNameList = (() => {
        fetch('https://pokeapi.co/api/v2/pokemon?&limit=151')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                const pokemonName = data.results[i].name;
                loadPokedexData(gridContainer).createGridItem(`${pokemonName}`)
            }
        }); 
    })();
}

// SEARCH FUNCTION FOR LIVE UPDATE
function search() {
    let input, filter, elements, a, txtValue;
    input = document.getElementById('search-bar');
    filter = input.value.toUpperCase();
    elements = document.getElementsByClassName('pokebox');
    
    for (let i = 0; i < elements.length; i++) {
        a = elements[i].getElementsByClassName('name')[0];
        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            elements[i].style.display = "";
        } else {
            elements[i].style.display = "none";
        }
    }
}

function pokeballAnimation(pokeball) {
    setTimeout(() => {
        pokeball.style.height = '55px';
        pokeball.style.transform = 'rotate(360deg)';
    }, 500);
}

export const loadPokedexData = ((grid) => {
    // COLOR SELECTION BASED ON TYPE, SCSS VARIABLES WEREN'T WORKING!
    const pickColor = (color) => {
        switch(color) {
            case 'grass':
                return '#7c5';
            case 'poison':
                return '#a59';
            case 'normal':
                return '#aa9';
            case 'fire':
                return '#f42';
            case 'water':
                return '#39f5';
            case 'electric':
                return '#fc3';
            case 'ice':
                return '#6cf';
            case 'fighting':
                return '#b54';
            case 'ground':
                return '#db5';
            case 'flying':
                return '#89f';
            case 'physic':
                return '#f59';
            case 'bug':
                return '#ab2';
            case 'rock':
                return '#ba6';
            case 'ghost':
                return '#66b';
            case 'dragon':
                return '#76e';
            case 'dark':
                return '#754';
            case 'steel':
                return '#aab';
            case 'fairy':
                return '#e9e';
        }
    }

    const createGridItem = (name) => {
        const gridBox = newElement('div', 'pokebox');
        grid.appendChild(gridBox);

        const img = newElement('img', 'poke-image');
        img.src = `https://img.pokemondb.net/sprites/home/normal/${name}.png`;
        gridBox.appendChild(img);

        const detailsContainer = newElement('div', 'details-container');
        gridBox.appendChild(detailsContainer);

        const nameText = newElement('div', 'name');
        detailsContainer.appendChild(nameText);
        nameText.textContent = `${name}`

        // FETCH TYPES BASED ON CURRENT NAME AND CREATES TYPE ELEMENTS
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            if(data.types.length >= 2) {
                const firstType = data.types[0].type.name
                const secondType = data.types[1].type.name

                const type1Text = newElement('div', 'type');
                const type2Text = newElement('div', 'type');

                type1Text.style.backgroundColor = pickColor(firstType);
                type2Text.style.backgroundColor = pickColor(secondType);
                gridBox.style.backgroundColor = pickColor(firstType);

                type1Text.textContent = firstType;
                type2Text.textContent = secondType;

                detailsContainer.appendChild(type1Text);
                detailsContainer.appendChild(type2Text);
            } else {
                const type = data.types[0].type.name
                const type1Text = newElement('div', 'type');
                type1Text.textContent = type;
                type1Text.style.backgroundColor = pickColor(type);
                gridBox.style.backgroundColor = pickColor(type);

                detailsContainer.appendChild(type1Text);
            }
        });
    }
    return {
        createGridItem
    }
});