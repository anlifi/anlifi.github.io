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