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
  let slow = head
  let fast = head && head.next   
  while(fast !== null && fast.next !== null) {

    if(fast === slow) {
      let curr0 = head
      let curr1 = fast.next

      while(curr0 !== curr1) {
        curr0 = curr0.next
        curr1 = curr1.next
      }
      return curr0
    }
    slow = slow.next
    fast = fast.next.next
  }
  return null
};