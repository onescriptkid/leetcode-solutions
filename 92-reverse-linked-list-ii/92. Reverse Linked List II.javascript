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

  //   1 2 3 4 5
  // p c n
  //     l   r
  
  //   1 2 3 4 4 4 4 5
  //   p c n
  //     l         r
  //     s
  //               p e

  let prev0 = null
  let curr0 = head
  let i = 1
  while(curr0 !== null && i < left) {
    prev0 = curr0
    curr0= curr0.next
    i++
  }
  // if(curr0 === null) return head
  // console.log('curr0', curr0)
  // console.log('prev0', prev0)

  let prev = prev0
  let start = curr0
  let e = curr0
  while(e !== null &&  i <= right) {
    let next = e.next
    e.next = prev 
    prev = e
    e = next
    i++
  }
  // console.log('b start', start)
  // console.log('b prev', prev)
  if(start !== null) {
    start.next = e
  }
  if(prev0!== null) {
    prev0.next = prev
  } else {
    head = prev
  }
  // console.log('a start', start)
  // console.log('a prev', prev)

  return head


    
};