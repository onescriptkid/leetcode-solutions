/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let curr = head

  let head1 = new ListNode()
  let curr1 = head1   

  let head2 = new ListNode()
  let curr2 = head2

  while(curr !== null) {
    let node = new ListNode(curr.val)
    if(curr.val < x) {
      curr1.next = node
      curr1 = curr1.next
    } else {
      curr2.next = node
      curr2 = curr2.next
    }
    curr = curr.next
  }

  curr1.next = head2.next

  return head1.next

};