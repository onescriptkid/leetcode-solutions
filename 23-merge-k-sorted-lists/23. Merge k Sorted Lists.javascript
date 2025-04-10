/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

  function merge(left, right) {
    let curr1 = left
    let curr2 = right
    let head = new ListNode()
    let curr3 = head

    while(curr1 !== null && curr2 !== null) {
      let node
      if(curr1.val < curr2.val) {
        node = new ListNode(curr1.val)
        curr1 = curr1.next
        curr3.next = node
        curr3 = curr3.next
      } else {
        node = new ListNode(curr2.val)
        curr2 = curr2.next
        curr3.next = node
        curr3 = curr3.next
      }
    }

    while(curr1 !== null) {
      let node = new ListNode(curr1.val)
      curr1 = curr1.next
      curr3.next = node
      curr3 = curr3.next
    }
    while(curr2 !== null) {
      let node = new ListNode(curr2.val)
      curr2 = curr2.next
      curr3.next = node
      curr3 = curr3.next
    }

    return head.next
  }

  function partition(arr) {
    if(arr.length === 0) {
      return null
    }
    if(arr.length === 1) {
      return arr[0]
    }
    let m = arr.length >> 1
    let left = arr.slice(0, m)
    let right = arr.slice(m)
    return merge(
      partition(left),
      partition(right)
    )
  }
  return partition(lists)
};