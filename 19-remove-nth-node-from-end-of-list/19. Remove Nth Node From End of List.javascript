/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

  let delay = head
  let curr = head
  let prev = null
  let i = 0
  while(curr !== null) {
    if(i >= n) {
      prev = delay
      delay = delay.next
    }
    curr = curr.next
    i++
  }
  if(prev !== null) {
    prev.next = delay.next
  } else {
    head = delay.next
  }
  return head

  //     a b c d e
  //   p d   c


};