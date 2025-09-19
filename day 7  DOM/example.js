//add a click event listener to the button with id myButton
// document.addEventListener('DOMContentLoaded', () => {
//   const myButton = document.getElementById('myButton');
//   myButton.addEventListener('click', () => {
//     alert('Button Clicked');
//   });
// });



//get the element first
const element = document.getElementById('button');
//add a click event listener to the button
element.addEventListener('click', () => {
  alert('Button Clicked');
});