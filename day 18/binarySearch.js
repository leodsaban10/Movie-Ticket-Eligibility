
const strings = [
    "apples",
    "oranges",
    "pear",
    "strawberries",
    "grapes",
    "melons",
    "kiwi", 
    "peach"
];

function binarySearch (array, target) {
    let left = 0;
    let right = array.length -1;
    target = target.toLowerCase();
    while (left <= right) {
        const midPoint =Math.floor((left + right) / 2);
        const midVal = array[midPoint].toLowerCase();
        if (midVal === target) return midPoint
        if (midVal < target) { 
            left = midPoint + 1; 
        } else {
            right = midPoint -1;
        }
    }
    return -1
}