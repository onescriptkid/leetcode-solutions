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
  // split   
  let slow = head
  let fast = head && head.next

  while(fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  let first = head
  let second = slow.next
  slow.next = null
  // 1 2 3 4 5
  //     s
  //           f

  // reverse
  let rev = reverse(second)
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

  // merge

  // 1 2 3
  // a
  // 4 5
  // b
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
  return head
};