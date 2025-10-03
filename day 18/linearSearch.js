let numbers = [1, 2, 3, 4, 5, 6]

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i
        }
    }
    return -1
}

