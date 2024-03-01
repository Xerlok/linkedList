/*eslint-disable*/
import Node from './Node';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds a new node containing value to the end of the list
  append(data) {
    const newNode = new Node(data);
    if (this.head === null) { this.head = newNode; } else {
      let currentNode = this.head;
      while (currentNode.nextNode != null) { currentNode = currentNode.nextNode; }
      currentNode.nextNode = newNode;
    }
    this.size += 1;
  }

  // adds a new node containing value to the start of the list
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

  // returns the node at the given index
  listAt(index) {
    let currentNode = this.head;
    if (index === 0) { return this.head; }
    for (let i = 0; i < index; i += 1) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  // removes the last element from the list
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

  contains(data) {
    let currentNode = this.head;
    while (currentNode.nextNode != null) {
      if (currentNode.data === data) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    if (currentNode.data === data) {
      return true;
    }
    return false;
  }

  find(data) {
    let index = 0;
    let currentNode = this.head;
    while (currentNode.nextNode != null) {
      if (currentNode.data === data) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index += 1;
    }
    return index;
  }

  toString() {
    const nodesData = [];
    let currentNode = this.head;
    while (currentNode.nextNode != null) {
      nodesData.push(currentNode.data);
      currentNode = currentNode.nextNode;
    }
    nodesData.push(currentNode.data);
    return nodesData;
  }

  insertAt(data, index) {
    
  }
}
