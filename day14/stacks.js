//LIFO - last in first out

//stack properties(methods):
// push(element) - adds an element to the top of the stack
// pop() - removes and returns the top element of the stack
// peek() - returns the top element of the stack without removing it
// isEmpty() - checks if the stack is empty
// size() - returns the number of elements in the stack
// clear() - removes all elements from the stack

class stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.at(-1);
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}

function processUndoStack(operations) {
    const stack = new stack(); // Using your stack class
    
    for (let charact of operations) {
        if (charact === '-') {
            // Undo operation - remove last character if stack isn't empty
            if (!stack.isEmpty()) {
                stack.pop();
            }
        } else {
            // Regular character - add to stack
            stack.push(charact);
        }
    }
    
    // Convert stack back to string
    return stack.items.join('');
}

// Test it
console.log(processUndoStack("abc-d-e")); // Output: "abe"
console.log(processUndoStack("a-b-c")); // Output: "c"
console.log(processUndoStack("abc---")); // Output: ""