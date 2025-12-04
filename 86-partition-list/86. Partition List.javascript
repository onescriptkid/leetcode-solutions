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

  let first = new ListNode()
  let curr1 = first
  let second = new ListNode()
  let curr2 = second

  let curr0 = head



  //   1 4 3 2 5 2    1      _
  //   c              f      s
  
  //   1 4 3 2 5 2    1      4
  //     c            f      s
  
  //   1 4 3 2 5 2    1      4 3
  //       c          f        s
  
  //   1 4 3 2 5 2    1 2    4 3
  //         c          f      s

  while(curr0 !== null) {
    let node = new ListNode(curr0.val)
    if(curr0.val < x) {
      curr1.next = node
      curr1 = curr1.next 
    } else {
      curr2.next = node
      curr2 = curr2.next
    }
    curr0 = curr0.next
  }
  // console.log('first', first.next)
  // console.log('second', second.next)

  // d 1 2 2
  // f     c
  // d 4 3 2
  // s     c

  curr1.next = second.next
  first = first.next

  return first
  
  
  //   f
  //   s
};