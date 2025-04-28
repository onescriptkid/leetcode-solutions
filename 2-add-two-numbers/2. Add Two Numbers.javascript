/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  let carry = 0

  let c1 = l1
  let c2 = l2
  let head = new ListNode()
  let c3 = head

  while(c1 !== null && c2 !== null) {

    let sum = carry + c1.val + c2.val
    let val = sum % 10

    if(sum >= 10) {
      carry = 1
    } else {
      carry = 0
    }
    // console.log('c1', c1.val, 'c2', c2.val, 'sum', sum, 'val', val, 'carry', carry)

    let node = new ListNode(val)
    c3.next = node
    c3 = c3.next
    c1 = c1.next
    c2 = c2.next
  } 

  while(c1 !== null) {

    let sum = carry + c1.val
    let val = sum % 10

    if(sum >= 10) {
      carry = 1
    } else {
      carry = 0
    }
    
    let node = new ListNode(val)
    c3.next = node
    c3 = c3.next
    c1 = c1.next
  }

  while(c2 !==null) {
    let sum = carry + c2.val
    let val = sum % 10

    if(sum >= 10) {
      carry = 1
    } else {
      carry = 0
    }
    
    let node = new ListNode(val)
    c3.next = node
    c3 = c3.next
    c2 = c2.next
  }

  if(carry === 1) {
    let node = new ListNode(1)
    c3.next = node
    c3 = c3.next
  }

  return head.next

};