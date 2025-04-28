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
  let curr1 = list1
  let curr2 = list2
  let head = new ListNode()
  let curr3 = head 
  while(curr1 !== null && curr2 !== null) {
    let node = new ListNode()
    if(curr1.val < curr2.val) {
      node.val = curr1.val
      curr1 = curr1.next
    } else {
      node.val = curr2.val
      curr2 = curr2.next
    }
    curr3.next = node
    curr3 = curr3.next
  }

  while(curr1 !== null) {
    let node = new ListNode()
    node.val = curr1.val
    curr1 = curr1.next
    curr3.next = node
    curr3 = curr3.next
  }
  while(curr2 !== null) {
    let node = new ListNode()
    node.val = curr2.val
    curr2 = curr2.next
    curr3.next = node
    curr3 = curr3.next
  }
  return head.next
};