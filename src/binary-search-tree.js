const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

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

  remove(data) {
    this.main = remove(this.main, data);

    function remove(currentNode, data) {
      if (!currentNode) return null;

      if (currentNode.data > data) {
        currentNode.left = remove(currentNode.left, data);
        return currentNode;
      }
      if (currentNode.data < data) {
        currentNode.right = remove(currentNode.right, data);
        return currentNode;
      }

      if (!currentNode.left && !currentNode.right) return null;

      if (!currentNode.left) {
        currentNode = currentNode.right;
        return currentNode;
      }

      if (!currentNode.right) {
        currentNode = currentNode.left;
        return currentNode;
      }

      let right = currentNode.right;

      while (right.left) right = right.left;

      currentNode.data = right.data;
      currentNode.right = remove(currentNode.right, right.data);

      return currentNode;
    }

  }

  min() {
    let currentNode = this.main;
    if (!this.main) return;
    while (currentNode.left) currentNode = currentNode.left;
    return currentNode.data;
  }

  max() {
    let currentNode = this.main;
    if (!this.main) return;
    while (currentNode.right) currentNode = currentNode.right;
    return currentNode.data;
  }
}
