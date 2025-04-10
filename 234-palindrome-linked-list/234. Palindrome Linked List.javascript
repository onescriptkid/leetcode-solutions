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
  let fast = head && head.next
  let slow = head
  while(fast !== null && fast.next !== null) {

    slow = slow.next
    fast = fast.next.next
  }
  // 1 2 2 1
  //     s 
  
  
  // 1 2 2 1
  //   s
  //       f
  function reverse(curr) {
    let prev = null
    //   1 2 3 4
    //         p c n
    while(curr !== null) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next   
    }
    return prev
  }
  // console.log('slow', slow)
  let rev = reverse(slow)
  // console.log('rev', rev)
  // console.log('head', head)

  let curr1 = head
  let curr2 = rev
  while(curr1 !== null && curr2 !== null) {
    if(curr1.val !== curr2.val) {
      return false
    }
    curr1 =curr1.next
    curr2 = curr2.next
  }

  return true


};