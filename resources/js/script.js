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
new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    scrollLock: true,
    scrollLockDelay: 50,
    dots: '.dots',
    draggable: true,
    dragVelocity: 1.5,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
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


function openPopupOne() {
    projectOne.style.display = 'block';
}

function openPopupTwo() {
    projectTwo.style.display = 'block';
}

function openPopupThree() {
    projectThree.style.display = 'block';
}

function closePopupOne() {
    projectOne.style.display = 'none';
}

function closePopupTwo() {
    projectTwo.style.display = 'none';
}

function closePopupThree() {
    projectThree.style.display = 'none';
}

projectOneBtn.addEventListener('click', openPopupOne, false);
projectTwoBtn.addEventListener('click', openPopupTwo, false);
projectThreeBtn.addEventListener('click', openPopupThree, false);
closeProjectOne.addEventListener('click', closePopupOne, false);
closeProjectTwo.addEventListener('click', closePopupTwo, false);
closeProjectThree.addEventListener('click', closePopupThree, false);
