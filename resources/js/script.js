// Open and close sidebar nav
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('nav-content');
let navIsOpen = false;

function toggleNav() {
    if (navIsOpen) {
        navIsOpen = false;
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
        return sidebar.style.width = '0';
    }
    navIsOpen = true;
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    return sidebar.style.width = '180px';
}

openBtn.addEventListener('click', toggleNav, false);
closeBtn.addEventListener('click', toggleNav, false);


// Toggle switch for light and dark mode
const toggleSwitch = document.querySelector('.mode-switch input[type="checkbox"]');
const currentColorMode = localStorage.getItem('mode') ? localStorage.getItem('mode') : null;

// Check current color mode
if (currentColorMode) {
    document.documentElement.setAttribute('color-mode', currentColorMode);

    if (currentColorMode === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Switch between modes and store user preference
function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('color-mode', 'dark');
        localStorage.setItem('mode', 'dark');
    }
    else {
        document.documentElement.setAttribute('color-mode', 'light');
        localStorage.setItem('mode', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchMode, false);

// Set slider for fun facts
const swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
});

// Add popup for project details
const projectOneBtn = document.getElementById('p-one-btn');
const projectTwoBtn = document.getElementById('p-two-btn');
const projectThreeBtn = document.getElementById('p-three-btn');
const projectOne = document.getElementById('p-one');
const projectTwo = document.getElementById('p-two');
const projectThree = document.getElementById('p-three');
const closeProjectOne = document.getElementById('close-p-one');
const closeProjectTwo = document.getElementById('close-p-two');
const closeProjectThree = document.getElementById('close-p-three');
const overlay = document.getElementById('overlay');


function openPopupOne() {
    overlay.style.width = '100%';
    projectOne.style.display = 'block';
}

function openPopupTwo() {
    overlay.style.width = '100%';
    projectTwo.style.display = 'block';
}

function openPopupThree() {
    overlay.style.width = '100%';
    projectThree.style.display = 'block';
}

function closePopupOne() {
    overlay.style.width = '0';
    projectOne.style.display = 'none';
}

function closePopupTwo() {
    overlay.style.width = '0';
    projectTwo.style.display = 'none';
}

function closePopupThree() {
    overlay.style.width = '0';
    projectThree.style.display = 'none';
}

projectOneBtn.addEventListener('click', openPopupOne, false);
projectTwoBtn.addEventListener('click', openPopupTwo, false);
projectThreeBtn.addEventListener('click', openPopupThree, false);
closeProjectOne.addEventListener('click', closePopupOne, false);
closeProjectTwo.addEventListener('click', closePopupTwo, false);
closeProjectThree.addEventListener('click', closePopupThree, false);
