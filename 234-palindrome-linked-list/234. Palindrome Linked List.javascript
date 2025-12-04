/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

  if(head.next ===null) return true


  //  1 2 3 2 1 
  //    f
  
  //  s 
  // First second half split trick
  let fast = head && head.next
  let slow = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  let first = head
  let second = slow.next
  slow.next = null
  // console.log('first', first)
  // console.log('second', second)

  // reverse
  let prev = null
  let curr = second
  while(curr !== null) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  let rev = prev

  // Walk rev and first
  let curr1 = rev
  let curr2 = first
  while(curr1 !== null && curr2 !== null) {
    if(curr1.val !== curr2.val) return false
    curr1 =curr1.next
    curr2 = curr2.next
  }



  return true

};