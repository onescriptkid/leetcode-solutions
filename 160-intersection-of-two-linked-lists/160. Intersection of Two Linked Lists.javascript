/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let currA = headA
  let currB = headB

  while(currA !== null || currB !== null) {
    if(currA === currB) {
      return currA
    }
    if(currA === null) {
      currA = headB
    } else {
      currA = currA.next
    }
    if(currB === null) {
      currB = headA
    } else {
      currB = currB.next
    }
  }
  return null
};