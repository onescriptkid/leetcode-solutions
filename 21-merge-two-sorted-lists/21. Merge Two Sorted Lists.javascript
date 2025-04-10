/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

  let head = null
  let prev = null
  let curr0 = null
  let curr1 = list1
  let curr2 = list2
  while(curr1 !== null && curr2 !== null) {
    let val
    if(curr1.val < curr2.val) {
      val = curr1.val
      curr1 = curr1.next
    } else {
      val = curr2.val
      curr2 = curr2.next
    }
    if(head === null) {
      head = new ListNode(val)
      curr0 = head
      prev = head
    } else {
      curr0 = new ListNode(val)
      prev.next = curr0
      prev = curr0 
    }
  }

  while(curr1 !== null) {
    let val = curr1.val
    curr1 = curr1.next
    if(head === null) {
      head = new ListNode(val)
      curr0 = head
      prev = head
    } else {
      curr0 = new ListNode(val)
      prev.next = curr0
      prev = curr0 
    }
  }

  while(curr2 !== null) {
    let val = curr2.val
    curr2 = curr2.next
    if(head === null) {
      head = new ListNode(val)
      prev = head
      curr0 = head
    } else {
      curr0 = new ListNode(val)
      prev.next = curr0
      prev = curr0
    }
  }

  return head
};