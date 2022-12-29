var input = document.createElement("input");
document.body.appendChild(input);
inputStyle(input);

function inputStyle(input){
input.style.width="200px"
input.style.height="40px"
input.style.border="2px solid red"
input.style.borderRadius = "8px"

}

function handleInput(event) {
  // Get the input element and its value
  var input = event.target;
  var value = input.value;

  // Replace any underscores with dots
  value = value.replace(/_/g, ".");

  // Log the result to the console
  console.log(value);
}

input.addEventListener("keydown", handleInput)