// reference for navbar javascript: https://www.youtube.com/watch?v=At4B7A4GOPg https://www.w3schools.com/howto/howto_js_topnav.asp
// reference for lightbox effect: https://www.youtube.com/watch?v=uKVVSwXdLr0
// for a refresher on adding class names to dom elements: https://stackoverflow.com/questions/1115310/how-can-i-add-a-class-to-a-dom-element-in-javascript
// for understanding js event.target: https://www.w3schools.com/jsref/event_target.asp
// js currentTarget: https://www.w3schools.com/jsref/event_currenttarget.asp
// updated transcript for better understanding of lightbox event listener function: https://chatgpt.com/share/678097d7-6f30-8007-8d8d-0dec043aa802
// refresher for concept of firstChild: https://www.w3schools.com/cssref/sel_firstchild.php
// refresher on using DOM to create a link tag: https://stackoverflow.com/questions/4772774/how-do-i-create-a-link-using-javascript

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

// creating the close button
const closeButtonDiv = document.createElement("div");
closeButtonDiv.id = "close-button-div";
const closeButton = document.createElement("a");
closeButton.innerText = "Close";
closeButton.className = "close-button";
closeButton.title = "Close";
closeButton.href = "#";

//creating the back and forward arrows in the gallery

// create the image div and the image element
const imgDiv = document.createElement("div");
imgDiv.className = "lightbox-img";
const img = document.createElement("img");

// function for the gallery effect to include in the forEach loop

images.forEach((image) => {
    image.addEventListener("click", e => {
        lightbox.classList.toggle("active"); // once the image is clicked the lightbox effect will be actively toggled
        lightbox.appendChild(closeButtonDiv);
        closeButtonDiv.appendChild(closeButton);
        img.src = image.src;
        imgDiv.appendChild(img);
        lightbox.appendChild(imgDiv);
    })
})

// function for the close button
closeButtonDiv.addEventListener("click", e => {
  lightbox.classList.remove("active");
})

// additive event listener to exit lightbox when outside of image is clicked
// if the target (the image) is not the current target (the lightbox) then the lightbox will stay active
// using return will not exit the event handler, but instead will ensure the lightbox still shows when the image is clicked
lightbox.addEventListener("click", e => {
  if (e.target !== e.currentTarget) {
    return;
  }
  lightbox.classList.remove("active");
})