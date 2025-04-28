/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {

  let val = 0
  let curr = head
  while(curr !== null) {
    let bit = curr.val
    val = val << 1
    val = val | bit
    curr = curr.next
  }
  return val
};