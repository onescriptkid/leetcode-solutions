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
var deleteDuplicates = function(head) {

  //   1 1 2 2 3 3
  //   p c
  let curr = head
  let prev= null
  while(curr !== null) {
    if(prev !== null) {
      if(prev.val === curr.val) {
        prev.next = curr.next
        curr = curr.next
      } else {
        prev = curr
        curr = curr.next
      }
    } else {
      prev = curr
      curr = curr.next
    }
  }
  return head
};