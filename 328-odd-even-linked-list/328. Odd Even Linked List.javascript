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
var oddEvenList = function(head) {
  // 1 2 3 4 5   
  // o n
  //   e n

  if(head === null) return head
  if(head.next === null) return head

  let odd = head
  let even = head.next
  let evenh = even
  let i = 0

  while(odd !== null && even !== null) {
    if(i % 2 === 0) {
      odd.next = even.next
      odd = odd.next
    } else {
      even.next = odd.next
      even = even.next
    }

    i++
  }

  let curr = head
  let prev = null
  while(curr !== null) {
    prev = curr
    curr = curr.next
  }

  if(prev !== null) {
    prev.next = evenh
  } 

  return head
};