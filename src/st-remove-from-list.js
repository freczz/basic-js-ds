const { NotImplementedError } = require('../extensions/index.js');

module.exports = function removeKFromList(l, k) {
   if (l && l.value === k) l = l.next;
   let result = l;
   while (result.next) {
      (result.next.value === k)
         ? result.next = result.next.next
         : result = result.next;
   }
   return l;
}
