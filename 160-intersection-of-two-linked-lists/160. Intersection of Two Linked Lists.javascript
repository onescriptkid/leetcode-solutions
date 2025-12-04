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

  // a1 a2 c1 c2 c3-b1 b2 b3 c1 c2 c3

  // b1 b2 b3 c1 c2 c3-a1 a2 c1 c2 c3

  let curra = headA
  let currb = headB

  while(curra !== null || currb !== null) {

    if(curra === null) {
      curra = headB
    }
    if(currb === null) {
      currb = headA
    }

    if(curra === currb) return curra

    curra = curra.next
    currb = currb.next
  }
};