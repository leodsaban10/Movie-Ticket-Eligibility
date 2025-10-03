class Node {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (data < current.data) {
                    if (!current.leftChild) {
                        current.leftChild = newNode;
                        break;
                    }
                    current = current.leftChild;
                } else {
                    if (!current.rightChild) {
                        current.rightChild = newNode;
                        break;
                    }
                    current = current.rightChild;
                }
            }
        }
    }
}