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

  //      1 2 3 4 5
  //          p d    c 

  let curr = head
  let i = 0

  let prevd = null
  let delay = head
  while(curr !== null) {

    if(i >= n) {
      prevd = delay
      delay = delay.next
    }
    curr = curr.next
    i++
  }   

  if(prevd === null) {
    head = head.next
  } else {
    prevd.next = delay.next
  }
  return head
};