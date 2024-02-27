/*eslint-disable*/
import Node from './Node';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) { this.head = newNode; } else {
      let currentNode = this.head;
      while (currentNode.nextNode != null) { currentNode = currentNode.nextNode; }
      currentNode.nextNode = newNode;
    }
    this.size += 1;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size += 1;
  }

  listSize() {
    return this.size;
  }

  listHead() {
    return this.head;
  }

  listTail() {
    let currentNode = this.head;
    while (currentNode.nextNode != null) { currentNode = currentNode.nextNode; }
    return currentNode;
  }

  listAt(index) {
    let currentNode = this.head;
    if (index === 0) { return this.head; }
    for (let i = 0; i < index; i += 1) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    if (this.head === null) { 
      throw new Error('No items in the list!');
    }
    try {
      if (this.size === 1) {
        this.head = null;
        this.size -= 1;
      } else {
        let currentNode = this.head;
        let previousNode = null;
        while (currentNode.nextNode != null) {
          previousNode = currentNode;
          currentNode = currentNode.nextNode;
        }
        currentNode = null;
        previousNode.nextNode = null;
        this.size -= 1;
      }
    } catch (e) {
      console.error(e);
    }
  }
}
