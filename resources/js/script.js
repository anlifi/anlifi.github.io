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
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
});