/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  // 1   2 3 4   5   
  //   p c n
  //     l   r
  //     s   r   e

  let curr = head
  let i = 1
  let prev = null
  while(curr !== null && i < left) {
    i++
    prev = curr
    curr = curr.next
  }

  let prev2 = null
  let start = curr
  let end = curr

  while(end !== null && i <= right) {
    i++
    let next = end.next
    end.next = prev2
    prev2 = end
    end = next
  }

  if(prev !== null) {
    prev.next = prev2
  } else {
    head = prev2
  }
  if(start) {
    start.next =end
  }
  return head

};