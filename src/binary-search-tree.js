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
    this.left = null;
    this.right = null;
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

    // let currentNode = this.main;

    // while (currentNode) {
    //   if (newNode.value < currentNode.value) {
    //     if (!currentNode.left) {
    //       currentNode.left = newNode;
    //       return;
    //     }
    //     currentNode = currentNode.left;
    //   } else if (newNode.value > currentNode.value) {
    //     if (!currentNode.right) {
    //       currentNode.right = newNode;
    //       return;
    //     }
    //     currentNode = currentNode.right;
    //   }
    // }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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
