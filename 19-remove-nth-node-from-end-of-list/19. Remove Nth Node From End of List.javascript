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
  let prev = null
  let curr = head
  let i = 0
  while(curr !== null) {
    if(i >= n) {
      prev = delay
      delay = delay.next
    }
    curr = curr.next
    i++
  }
  //   1 2 3 4
  //   p d
  if(prev === null) {
    head = delay.next
  } else {
    prev.next = delay.next 
  }
  return head

};