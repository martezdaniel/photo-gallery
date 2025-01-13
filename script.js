// reference for navbar javascript: https://www.youtube.com/watch?v=At4B7A4GOPg https://www.w3schools.com/howto/howto_js_topnav.asp
// reference for lightbox effect: https://www.youtube.com/watch?v=uKVVSwXdLr0

// code for the hamburger toggle button in the nav bar (for mobile view) //

// gets the element from the class with the toggle button in the nav bar (the hamburger icon)
const toggleButton = document.getElementsByClassName('toggle-button')[0];
// gets the element from the class with the navigation bar
const navBarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
    // when the icon is clicked, the active class will be toggled on if it isn't already, meaning that nav bar will appear, and vice-versa
})

// code for the lightbox effect for the gallery images //

// creating the div element using DOM manipulation which will make it easier when coding the functionality and to ensure it works on every gallery page
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox); // appends the lightbox to the end of the document body

// selects all the images from the gallery-grid class so the code only affects the images from the galleries
const images = document.querySelectorAll('.gallery-grid img'); 