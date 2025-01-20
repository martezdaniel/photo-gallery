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

// selects all the images from the gallery-grid class so the code only affects the images from the galleries
const images = document.querySelectorAll('.gallery-grid img');

// for each image in the gallery, add a click event listener that will toggle the lightbox containing the image for each image //
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.toggle('active');

        const img = document.createElement('img'); // creating a new image element which will be the selected image in the lightbox
        img.className = 'lightbox-img'; // giving the lightbox image a class name to fix image sizing within the lightbox
        img.src = image.src // this will ensure that the source of the image variable is the same as the image source that the user clicks on

        // if the firstChild of the lightbox div already exists, then it will be removed to append the image that was clicked on
        // this will prevent multiple images display when the user clicks on another image after the first one
        if (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    })
})

// event listener for when the lightbox area or the close indicator is clicked, it will remove the active lightbox
// the currentTarget in this is the lightbox, and the target is the image
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) {
        return;
        // if the user clicks on the image, the lightbox will stay active
        // using return will not exit the event handler, but instead will ensure the lightbox still shows when the image is clicked
    }
    else {
        lightbox.classList.remove('active');
        // if the user clicks in the lightbox area, then the lightbox effect will be removed
    }
})