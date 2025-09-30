//FIFO - first in first out

//enqueue() adds an element to the end of the queue
//dequeue() removes and returns the front element of the queue
//front() returns the front element without removing it
//isEmpty() checks if the queue is empty
//size() returns the number of elements in the queue
//clear() removes all elements from the queue

class Queue {
    constructor() {
        this.items = []; // empty line
    }
    enqueue(item) { 
        this.items.push(item) //joins the back of the line
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Empty')
        }
        return this.items.shift() // serve the first person
    }
    peek() {
        if (this.isEmpty()){
            throw new Error ('Line is Empty')
        }
        return this.items[0]; // see who's first without serving them

    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}