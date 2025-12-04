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
var rotateRight = function(head, k) {
  if(head === null || head.next === null) return head   

  let curr0 = head
  let len = 0
  while(curr0 !== null) {
    len++
    curr0 = curr0.next
  }
  k = k % len
  if(k === 0) return head

  let curr = head
  let prev = null
  let delay = head
  let prevd = null
  let i = 0
  while(curr !== null) {
    if(i >= k) {
      prevd = delay
      delay = delay.next
    }
    i++
    prev = curr
    curr = curr.next
  }
  prev.next = head
  prevd.next = null
  head = delay
  return head
  //   1 2 3 4 5
  //       p d p c

 
};