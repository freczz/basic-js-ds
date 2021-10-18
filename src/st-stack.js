const { NotImplementedError } = require('../extensions/index.js');
module.exports = class Stack {
  constructor() {
    this.array = [];
  }
  push(element) {
    return this.array.push(element);
  }
  pop() {
    return this.array.pop();
  }
  peek() {
    return this.array[this.array.length - 1];
  }
}
