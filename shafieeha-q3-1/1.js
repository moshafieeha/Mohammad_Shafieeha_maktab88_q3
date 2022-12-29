// create the container div element
let container = document.createElement("div");
document.body.appendChild(container);
containerBaseStyle(container);

// create the heading element and append it to the container div
let heading = document.createElement("h1");
heading.innerText = "Light Mode";
container.appendChild(heading);

// create the paragraph element and append it to the container div
let paragraph = document.createElement("p");
paragraph.innerText =
  "Click the buttons to switch between light and dark mode.";
container.appendChild(paragraph);

// styling
function dark(element) {
  element.style.color = "white";
  element.style.backgroundColor = "black";
}
function light(element) {
  element.style.color = "black";
  element.style.backgroundColor = "#ddd";
}
function containerBaseStyle(element) {
  element.style.fontFamily = "Segoe UI";
  element.style.width = "30%";
  element.style.height = "300px";
  element.style.borderRadius = "8px";
  element.style.backgroundColor = "#ddd";
}
function btnBaseStyle(element) {
  element.style.fontFamily = "Segoe UI";
  element.style.width = "100px";
  element.style.height = "30px";
  element.style.borderRadius = "4px";
  element.style.margin = "10px";
}

// create the light mode button and append it to the container div
let lightButton = document.createElement("button");
lightButton.innerText = "Light Mode";
btnBaseStyle(lightButton);
light(lightButton);

lightButton.addEventListener("click", function () {
  heading.innerText = "Light Mode";
  light(container);
  light(paragraph);
});
document.body.appendChild(lightButton);

// create the dark mode button and append it to the container div
let darkButton = document.createElement("button");
darkButton.innerText = "Dark Mode";
btnBaseStyle(darkButton);
dark(darkButton);
darkButton.addEventListener("click", function () {
  heading.innerText = "Dark Mode";
  dark(container);
  dark(paragraph);
});
document.body.appendChild(darkButton);
