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
var reverseList = function(head) {
  //   1 2 3 4 5
  // p c n

  let curr = head   
  let prev = null
  while(curr !== null) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
};