/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  // h
  // 1 2 3 4
  // 2 1 4 3


  let curr = head;
  let prev = null;
  let next = null;
  let nextnext = null;
  let i = 0;
  while(curr !== null) {
    // console.log(i, curr, 'prev', prev)
    // first in pair
    if(i % 2 === 0) {
      next = curr.next
      if(next !== null) {
        nextnext = next.next
        next.next = curr
        curr.next = nextnext
        if(prev !== null) {
          prev.next = next
        }
        curr = next
      }
    }
    if(i === 0) {
      head = curr
    }

    prev = curr;
    curr = curr.next;
    i++
  }
  // console.log(head)
  return head
};