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
  //   1 2 3 4 5
  // p c n nn
  let curr = head
  let prev = null
  while(curr !== null && curr.next !== null) {
    let next = curr.next
    let nextnext = next.next

    if(prev === null) {
      head = next
    } else {
      prev.next = next
    }

    curr.next = nextnext
    next.next = curr

    prev = curr
    curr = curr.next
  }
  return head
};