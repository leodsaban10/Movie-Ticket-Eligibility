//linked lists

//nodes - elements that make up the linked list(items in the list)
// each node has two properties:
// 1. data - the value of the node
// 2. next - a pointer to the next node in the list (null if it's the last node)

//linked list properties(methods):
// append(data) - adds a new node with the specified data to the end of the list
// prepend(data) - adds a new node with the specified data to the beginning of the list
// insertAt(data, index) - inserts a new node with the specified data at the given index
// removeAt(index) - removes the node at the specified index
// getAt(index) - returns the data of the node at the specified index
// size() - returns the number of nodes in the list
// isEmpty() - checks if the list is empty
// clear() - removes all nodes from the list
// print() - prints all nodes in the list

//DOUBLY LINKED LIST - each node has an additional pointer to the previous node
// this allows for traversal in both directions (forward and backward)

//CIRCULAR LINKED LIST - the last node points back to the first node
// this creates a circular structure, allowing for continuous traversal

//singly linked list node
class SinglyNode {
    constructor(value) {
        this.value = value;
        this.next = null; //<-- pointer to the next node
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; //first node in the list
    }

    add(value) {
        const newNode = new SinglyNode(value);
        if (!this.head) {
            this.head = newNode; //if list is empty, set head to new node
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        if(current.next) {
            current.next = current.next.next;
         //set the next of the last node to the new node
        }
    }
    traverse(callback) {
        let current = this.head;
        while (current) {
            callback(current.value);
            current = current.next;
        }
    }
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null; //value not found
    }
}

class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const newNode = new DoublyNode(value);
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    delete(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current.prev) current.prev.next = current.next;
                else this.head = current.next;
                if (current.next) current.next.prev = current.prev;
                else this.tail = current.prev;
                return;
            }
            current = current.next;
        }
    }
    
    traverseForward(callback) {
        let current = this.head;
        while (current) {
            callback(current.value);
            current = current.next;
        }
    }

    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
                current = current.next;
            }
        }
        return null; //value not found  
    }
}
