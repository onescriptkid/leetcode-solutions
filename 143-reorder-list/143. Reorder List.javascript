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
  // split into first and second list
  //   1 2 3 4 5
  //             f
  //       s
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

  // reverse second list
  function reverse(curr) {
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


  // merge
  let a = first
  let b = rev

  // 1 2 3
  // a

  // 4 5
  // b
  while(a !== null && b !== null) {
    let an = a.next
    let bn = b.next
    a.next = b
    b.next = an
    a = an
    b = bn 
  }
  return first

};