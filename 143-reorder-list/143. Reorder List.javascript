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
  // divide into first and second
  let slow = head
  let fast = head && head.next
  while(fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  // 1 2 3 4 5 6
  //     ^
  let second = slow.next
  slow.next = null
  let first = head
  // console.log('first', first)
  // console.log('second', second)

  // reverse second
  function reverse(curr) {
    let prev = null
    //  1 2 3 4
    //p c n 
    while(curr !== null) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return prev
  }
  let rev = reverse(second)
  // console.log('reverse', rev)

  // merge
  // 1  2  3   6  5  4 
  // c0 n0     c1 n1
  let curr0 = first
  let curr1 = rev
  while(curr1 !== null) {
    let next0 = curr0.next
    let next1 = curr1.next

    curr0.next = curr1
    curr1.next = next0
    
    curr0 = next0
    curr1 = next1
  }


};