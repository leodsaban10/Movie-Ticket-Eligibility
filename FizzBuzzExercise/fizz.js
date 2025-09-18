
// The function to run FizzBuzz
function runFizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Wait for the page to load, then add a click event to the button
window.onload = function() {
  let button = document.querySelector('.button');
  button.onclick = runFizzBuzz;
};

