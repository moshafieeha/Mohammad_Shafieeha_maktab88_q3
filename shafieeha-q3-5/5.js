var london = document.getElementById("London");
var tehran = document.getElementById("Tehran");
var tokyo = document.getElementById("Tokyo");
var title = document.getElementById("title");
var innerText = document.getElementById("inner-text");

london.onclick = function () {
  tehran.style.backgroundColor = "transparent";
  tokyo.style.backgroundColor = "transparent";
  london.style.backgroundColor = "grey";
  title.innerText = "London";
  innerText.innerText = "London is the capital city of England";
};
tehran.onclick = function () {
  london.style.backgroundColor = "transparent";
  tokyo.style.backgroundColor = "transparent";
  tehran.style.backgroundColor = "grey";
  title.innerText = "Tehran";
  innerText.innerText = "Tehran is the capital city of Iran";
};
tokyo.onclick = function () {
  tehran.style.backgroundColor = "transparent";
  london.style.backgroundColor = "transparent";
  tokyo.style.backgroundColor = "grey";
  title.innerText = "tokyo";
  innerText.innerText = "Tokyo is the capital city of Japan";
};