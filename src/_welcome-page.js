import { newElement } from './_functions';

const content = document.querySelector('.content');

// LOADS AS A DEFAULT
(() => {
    const pokeballIcon = newElement('img', 'home-pokeball');
    pokeballIcon.src = "../images/pokeball-icon-main.svg";
    pokeballIcon.alt = 'pokeball icon';
    content.appendChild(pokeballIcon);

    const welcomeText = newElement('p', 'welcome-text');
    welcomeText.textContent = 'WELCOME BACK';
    content.appendChild(welcomeText);

    // FORM DATA FOR NAME, USING LOCAL STORAGE TO IF THE NAME
    if (!localStorage.getItem('name')) {
        // USER HAS NO NAME
        welcomeText.textContent = 'WELCOME';

        const form = document.createElement('form');
        form.id = 'first-time';

        const input = newElement('input', 'form-name');
        input.id = 'name';
        input.type = 'text';
        input.placeholder = 'NAME';

        form.appendChild(input);
        content.appendChild(form);
    } else {
        const userName = newElement('p', 'user-text');
        userName.textContent = `${localStorage.getItem('name')}`
        content.appendChild(userName);
    }
    const launchText = newElement('p', 'launch-button');
    launchText.textContent = 'LAUNCH';
    content.appendChild(launchText);
})();

// CHECKS FOR EVENT LISTNER
const newPageBtn = (() => {
    const launchBtn = document.querySelector('.launch-button');
    launchBtn.addEventListener('click', launchButton);
})();

function launchButton () {
    // STARTING ANIMATION IF NAME IN LOCAL STORAGE
    if (localStorage.getItem('name')) {
        navbarAnimation();

        // REMOVE ELEMENTS WITH DELAY
        setTimeout(() => {
            content.clear();
        }, 600);
    }
    // GETTING NAME DATA AND STORING TO LOCALSTORAGE
    if (document.querySelector('#name') != null) {
        const name = document.querySelector('#name').value;
        localStorage.setItem('name', `${name}`);

        if (!document.querySelector('#name').value) {
            alert('Please enter a name');
        }
    }
}

function navbarAnimation() {
    // START NAVBAR ANIMATION
    (() => {
        const homeBottomBar = document.querySelector('.nav-bar');
        homeBottomBar.style.height = '100%';
        setTimeout(() => {
            homeBottomBar.style.top = '0px';
            homeBottomBar.style.height = '40px';
        }, 1000);
    })();
}