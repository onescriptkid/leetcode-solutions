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
var reverseKGroup = function (head, k) {
  // - 1 2 3 4 5 6 7 
  // p c 
  //   s     e
  //       r
  let dummy = new ListNode()
  let prevEnd = dummy
  let curr = head
  while(curr !== null) {
    let i = 0
    let start = curr
    let end = curr
    while(i < k && end !== null) {
      end = end.next
      i++
    }

    if(i === k) {
      let rev = reverse(start, end)
      prevEnd.next = rev
    } else {
      prevEnd.next = start
    }

    prevEnd = start
    curr = end
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