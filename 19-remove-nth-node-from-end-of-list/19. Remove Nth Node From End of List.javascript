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
  //   1 2 3 4 5
  //       p d   c
  let curr = head
  let delay = head
  let prevd = null
  let i = 0
  while(curr !== null) {
    if(i >= n) {
      prevd = delay
      delay = delay.next
    }

    curr = curr.next
    i++
  }

  if(prevd !== null) {
    prevd.next = delay.next
  } else {
    head = delay.next
  }
  return head
};