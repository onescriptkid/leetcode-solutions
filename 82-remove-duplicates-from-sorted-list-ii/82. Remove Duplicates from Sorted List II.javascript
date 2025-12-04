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


  //   1 2 3 3 4 4 5   
  //     d   c n
  
  //   1 2 - 3 4 4 5   
  //     d   c n


  let dummy = new ListNode()
  dummy.next = head
  diff = dummy

  let curr = head
  while(curr !== null && curr.next !== null) {

    if(curr.val === curr.next.val) {
      while(curr.next !== null && curr.val === curr.next.val) {
        curr = curr.next
      }
      diff.next = curr.next
      curr = curr.next

    } else {
      diff = curr
      curr = curr.next
    }
  }

  return dummy.next
};