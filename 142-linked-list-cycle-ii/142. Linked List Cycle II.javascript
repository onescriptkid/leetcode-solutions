/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let fast = head && head.next
  let slow = head

  while(fast !== null && fast.next !== null) {
    if(fast === slow) {
      let curr0 = fast.next
      let curr1 = head
      while(curr0 !== curr1) {
        curr0 = curr0.next
        curr1 = curr1.next
      }
      return  curr0

    }
    fast = fast.next.next
    slow = slow.next
  }   

  return null
};