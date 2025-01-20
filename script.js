// reference for navbar javascript: https://www.youtube.com/watch?v=At4B7A4GOPg https://www.w3schools.com/howto/howto_js_topnav.asp
// reference for lightbox effect: https://www.youtube.com/watch?v=uKVVSwXdLr0
// for a refresher on adding class names to dom elements: https://stackoverflow.com/questions/1115310/how-can-i-add-a-class-to-a-dom-element-in-javascript
// for understanding js event.target: https://www.w3schools.com/jsref/event_target.asp
// updated transcript for better understanding of lightbox event listener function: https://chatgpt.com/share/678097d7-6f30-8007-8d8d-0dec043aa802
// refresher for concept of firstChild: https://www.w3schools.com/cssref/sel_firstchild.php

// code for the hamburger toggle button in the nav bar (for mobile view) //

// gets the element from the class with the toggle button in the nav bar (the hamburger icon)
const toggleButton = document.getElementsByClassName("toggle-button")[0];
// gets the element from the class with the navigation bar
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
  // when the icon is clicked, the active class will be toggled on if it isn't already, meaning that nav bar will appear, and vice-versa
});

// code for the lightbox effect for the gallery images //

// creating the div element using DOM manipulation which will make it easier when coding the functionality and to ensure it works on every gallery page
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox); // appends the lightbox to the end of the document body

const images = [...document.querySelectorAll(".gallery-grid img")]; // gets all images in the gallery-grid and puts them into an array

images.forEach((image) => {
    image.addEventListener("click", e => {
        lightbox.classList.toggle("active"); // once the image is clicked the lightbox effect will be actively toggled

        // creating the close button that will appear in the right corner just above the image in the lightbox
        const closeButtonDiv = document.createElement("div");
        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.className = "close-button";
        lightbox.appendChild(closeButton);

        const img = document.createElement("img");
        img.src = image.src;
        lightbox.appendChild(img);
    })
})