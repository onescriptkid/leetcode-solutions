/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let fast = head && head.next
  let slow = head

  while(fast !== null && fast.next !== null) {
    if(fast === slow) return true
    fast = fast.next.next
    slow = slow.next
  }   
  return false
};