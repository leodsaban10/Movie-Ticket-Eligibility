class Node {
    constructor(data) {
        this.data() = null;
        this.leftChild() = null;
        this.rightChild() = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode
        }
        let pointer = this.root;
        while (pointer) {
            if (data < pointer.data) {
               if (!pointer.leftChild) {
                pointer.leftChild = newNode;
                break;
               }
               pointer = pointer.leftChild;
            } else {
                if (!pointer.rightChild) {
                    pointer.rightChild = newNode;
                    break;
                }
                pointer = pointer.rightChild
            }
        }
    }
}