

// Create a div element to hold the progress bar
var progressBar = document.createElement("div");
document.body.appendChild(progressBar);
containerBarStyle(progressBar);

// Set the width and height of the progress bar
function containerBarStyle(progressBar) {
  progressBar.style.width = "50%";
  progressBar.style.height = "20px";
  progressBar.style.backgroundColor = "#ddd";

}

// Create a span element to display the progress value
var progressValue = document.createElement("span");
progressBar.appendChild(progressValue);
pbvBarStyle(progressValue);

// Set the width and height of the progress value
function pbvBarStyle(progressValue) {
  progressValue.style.width = "0%";
  progressValue.style.height = "100%";
  progressValue.style.color = "black";
  progressValue.style.backgroundColor = "#4caf50";
}

// Create a button element to increase the progress
var button = document.createElement("button");
document.body.appendChild(button);

button.textContent = "Increase Progress";

// Add an event listener to the button to increase the progress when clicked
button.addEventListener("click", function () {
  // Get the current progress value
  var progress = parseInt(progressValue.style.width);

  // Increase the progress by 10%
  progress += 10;

  // Update the progress value
  progressValue.style.width = progress + "%";
});
