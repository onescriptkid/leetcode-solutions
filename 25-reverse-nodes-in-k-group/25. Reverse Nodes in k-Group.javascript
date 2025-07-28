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

  //   1 2 3 4 5 6 7
  //   s     e
  // p
  //       r
  let dummy = new ListNode()
  let prevEnd = dummy
  let curr = head

  while(curr !== null) {

    let s = curr
    let e = curr
    let i = 0
    while(i < k && e !== null) {
      e = e.next
      i++
    }

    if(i === k) {
      let rev = reverse(s, e)
      prevEnd.next = rev
    } else {
      prevEnd.next = s
    }

    prevEnd = s
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