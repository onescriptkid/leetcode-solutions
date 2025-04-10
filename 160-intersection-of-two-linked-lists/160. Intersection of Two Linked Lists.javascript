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
  // a1 a2 
  //            c1 c2 c3
  // b1 b2 b3
  // a1 a2 c1 c2 c3 b1 b2 b3 c1 c2 c3
  // b1 b2 b3 c1 c2 c3 a1 a2 c1 c2 c3

  let curr1 = headA
  let curr2 = headB
  while(curr1 !== null || curr2 !== null) {
    // console.log('c1', curr1 && curr1.val, 'c2', curr2 && curr2.val)
    if(curr1 === curr2) return curr1
    if(curr1 === null) {
      curr1 = headB
    } else {
      curr1 = curr1.next
    }
    if(curr2 === null) {
      curr2 = headA
    } else {
      curr2 = curr2.next
    }
    // curr1 = curr1.next
    // curr2 = curr2.next
  }
  return null
};