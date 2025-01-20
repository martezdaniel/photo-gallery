// reference for navbar javascript: https://www.youtube.com/watch?v=At4B7A4GOPg https://www.w3schools.com/howto/howto_js_topnav.asp
// reference for lightbox effect: https://www.youtube.com/watch?v=uKVVSwXdLr0
// for a refresher on adding class names to dom elements: https://stackoverflow.com/questions/1115310/how-can-i-add-a-class-to-a-dom-element-in-javascript
// for understanding js event.target: https://www.w3schools.com/jsref/event_target.asp
// updated transcript for better understanding of lightbox event listener function: https://chatgpt.com/share/678097d7-6f30-8007-8d8d-0dec043aa802
// refresher for concept of firstChild: https://www.w3schools.com/cssref/sel_firstchild.php

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

// selecting the images may require a spread operator to put them in an array so i can do both the lightbox and the gallery effect
// for each for each image that will be clicked on will show the individual image, as well as the close button and the arrows for navigation
const images = [...document.querySelectorAll('.gallery img')];

images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.toggle('active');
        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);
    })
})