/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  //    1 2 3 4 5 6 7   
  //  p       c
  //    s   r e

  // i === k 
  //    1 2 3 4 5 6 7   
  //  p       c
  //    s   r e
  //    3 2 1 4 5 6 7   
  //  p       c
  //    r   s e
  
  // e === null
  //    1 2 3 4 5 6 7   
  //  p       c
  //    s   r e

  let dummy = new ListNode()
  let prevend = dummy

  let curr = head

  while(curr !== null) {
    let s = curr
    let e = curr
    let i = 0

    while(e !== null && i < k) {
      e = e.next
      i++
    }

    if(i === k) {
      let rev = reverse(s, e)
      prevend.next = rev
    } else {
      prevend.next = s
    }
    prevend = s
    curr = e
  }

  return dummy.next

  function reverse(curr, end) {

    let prev = null
    while(curr !== null && curr !== end) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return prev
  }
};