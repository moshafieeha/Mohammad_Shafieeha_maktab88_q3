// // Create an input element
// var inputField = document.getElementById("inputField");
// var list = document.getElementById("itemList");


// function filterList(input, list) {
//   var value = input.value.toLowerCase();

//   for (var i = 0; i < list.length; i++) {
//     var item = list[i];

//     var text = item.textContent.toLowerCase();

//     if (text[0] === value[0]) {
//       item.style.display = "";
//     } else {
//       item.style.display = "none";
//     }
//   }
// }

// filterList(inputField, list);

// inputField.addEventListener("input", function() {
//   filterList(inputField, list);
// });


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("li");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }