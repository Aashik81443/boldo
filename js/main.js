let header = document.querySelector('.site-header');


// sticky header

function onScroll() {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');

    }
}

window.addEventListener('scroll', onScroll);

// Hamburger-toggle

function hamburgerToggle() {
    header.classList.toggle('nav-show');
}