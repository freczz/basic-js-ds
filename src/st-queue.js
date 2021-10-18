const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

module.exports = class Queue {
  constructor() {
    this.queue = {};
    this.length = 0;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.queue = new ListNode(value);
    } else {
      let current = this.queue;
      while (current.next) current = current.next;
      current.next = new ListNode(value);
    }
    this.length++;
  }

  dequeue() {
    if (this.queue) {
      let result = this.queue.value;
      this.queue = this.queue.next;
      return result;
    }
    return null;
  }
}
