// set the total in the h1 tag to a function that updates through an if statement when each button is clicked.
// var total1 = function() {

// }
let total = 0;
const limeColaButtonElement = document.getElementById("limeColaButton");
limeColaButtonElement.addEventListener("click", (event) => {
  console.log(total);
  total += 2;
  console.log(total);
});

let runningTotal = document.getElementById("totalCost");
let limeCola = document.getElementById("limeColaButton");
let saltedPeanuts = document.getElementById("saltedPeanutsButton");
let choclateBar = document.getElementById("chocolateBarButton");
let fruitGummies = document.getElementById("fruitGummiesButton");

let updateTotal = function() {
  runningTotal.innerHTML = total;
}

let addLimeCola = function() {
  total += limeColaPrice;
  updateTotal();

  limeCola.addEventListener("click", addLimeCola);
  
}



// function runningTotal(){
//   if (limeColaButtonElement) {
//     total += 2;

//   }
// };

