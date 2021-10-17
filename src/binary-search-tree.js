const { NotImplementedError } = require('../extensions/index.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinarySearchTree {
  constructor() {
    this.main = null;
  }

  root() {
    return this.main;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.main) {
      this.main = newNode;
      return;
    }

    let currentNode = this.main;

    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.main;

    while (true) {
      if (currentNode === null) return false;
      if (currentNode.data === data) return true;
      if (currentNode.data < data) currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }
  }

  find(data) {
    let currentNode = this.main;

    while (true) {
      if (currentNode === null) return null;
      if (currentNode.data === data) return currentNode;
      if (currentNode.data < data) currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }
  }

  remove(/*data*/) {
    throw new NotImplementedError('Not implemented');
    // let currentNode = this.main;

    // while (true) {
    //   if (currentNode === null) return null;
    //   if (currentNode.data === data) {
    //     currentNode = null;
    //     return currentNode;
    //   }
    //   if (currentNode.data < data) currentNode = currentNode.right;
    //   else currentNode = currentNode.left;
    // }
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}
