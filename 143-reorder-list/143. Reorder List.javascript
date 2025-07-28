/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  // split into 1st & 2nd half
  // a b c d e f
  //           f
  //     s
  let slow = head
  let fast = head && head.next
  while(fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  let first = head
  let second = slow.next
  slow.next = null
  // console.log('first', first)
  // console.log('second', second)

  // reverse second half
  function reverse(curr) {
    //   1 2 3 4
    // p c n
    let prev = null
    while(curr !== null) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return prev
  }
  let rev = reverse(second)
  // console.log('rev', rev)

  // merge lists
  let a = first
  let b = rev
  while(a !== null && b !== null) {
    let an = a.next
    let bn = b.next

    a.next = b
    b.next = an

    a = an
    b = bn
  }

  return first


  // 1  2  3 
  // a  an
  
  // 6  5  4
  // b  bn


};