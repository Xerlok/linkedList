/* eslint-disable */
import Node from './Node';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {this.head = newNode;} 
    else {
      let currentNode = this.head;
      while(currentNode.nextNode != null) {currentNode = currentNode.nextNode;}
      currentNode.nextNode = newNode;
    }
    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (this.head === null) {this.head = newNode}
    else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }
}
