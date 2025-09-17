//array practice
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);

//accessing elements
console.log(fruits[0]); //apple
console.log(fruits[1]); //banana
console.log(fruits[2]); //orange

//modifying elements
fruits[1] = 'grape';
console.log(fruits); //['apple', 'grape', 'orange']

//array methods
fruits.push('mango'); //adds to the end
console.log(fruits); //['apple', 'grape', 'orange', 'mango']

fruits.pop(); //removes from the end
console.log(fruits); //['apple', 'grape', 'orange']

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = array1.concat(array2); //combines two arrays
console.log(combined); //[1, 2, 3, 4, 5, 6]

const myArray = [1, 2, 3, 4,["hello", "world"], {name: "Alice", age: 25}];
console.log(myArray[4][0]); //hello
console.log(myArray[5].name); //Alice

const newArray = [
    ...array1, ...array2, ...myArray
]
console.log(newArray); //[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, Array(2), {…}]

//concat example
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let letters = arr1.concat(arr2);
console.log(letters); //['a', 'b', 'c', 'd', 'e', 'f']

const array3 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;      //element is each item in the array
console.log(array3.findIndex(isLargeNumber)); //3 //index of first element > 13

const array4 = [5, 12, 8, 130, 44];
const newArray4 = [];
array4.forEach((element) => {
   console.log(element); //logs each element
   newArray4.push(element + 'x');
});
console.log(newArray4); //['5x', '12x', '8x', '130x', '44x']

array4.forEach((element, index) => {
    console.log(`Index ${index}: ${element}`);
});
// Index 0: 5
// Index 1: 12
// Index 2: 8
// Index 3: 130
// Index 4: 44

const newArray5 = array4.map((element) => element * 2);
console.log(newArray5); //[10, 24, 16, 260, 88]
newArray5.push("hello"); //.push adds to the end of the array
console.log(newArray5); //[10, 24, 16, 260, 88, "hello"]


//how to find the last index of an array
const fruits2 = ['apple', 'banana', 'orange', 'banana'];
fruits2[fruits2.length - 1]; //modifying last element
console.log(fruits2[fruits2.length - 1]); //banana
console.log(fruits2[fruits2.length 0]); //apple

console.log(fruits2.indexOf('banana'));

//assignement for class
const numbers = [8, 10, 12, 14, 16];
function arraySquared(element) {
    return element.map(x => x * 2);
}
console.log(arraySquared(numbers)); //[16, 20, 24, 28, 32]

//ask the palindrome question
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome('racecar')); //true
console.log(isPalindrome('hello')); //false