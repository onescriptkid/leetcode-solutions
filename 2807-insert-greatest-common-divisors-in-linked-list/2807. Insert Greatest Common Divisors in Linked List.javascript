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
var insertGreatestCommonDivisors = function(head) {
     //   18 6 10 3
  // p c  n

  //   18 x 6 10 3
  // p c    n
  
  //   18   6   10   3
  //   18 6 6 2 10 1 3
  // p c
  function gcd(a,b) {
    if(b === 0) {
      return a
    } else {
      return gcd(b, a%b)
    }
  }

  let curr = head
  while(curr !== null && curr.next !== null) {
    let next = curr.next
    let d = gcd(curr.val, next.val)

    let node = new ListNode(d)
    curr.next = node
    node.next = next
    curr = next
  }
  return head 
};