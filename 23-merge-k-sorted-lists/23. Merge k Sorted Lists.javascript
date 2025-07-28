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
    let curr0 = left
    let curr1 = right
    let dummy = new ListNode()
    let curr2 = dummy

    while(curr0 !== null && curr1 !== null) {
      let node = new ListNode()
      if(curr0.val < curr1.val) {
        node.val = curr0.val
        curr0 = curr0.next
      } else {
        node.val = curr1.val
        curr1 = curr1.next
      }
      curr2.next = node
      curr2 = curr2.next
    }
    while(curr0 !== null) {
      let node = new ListNode()
      node.val = curr0.val
      curr0 = curr0.next
      curr2.next = node
      curr2 = curr2.next
    }
    while(curr1 !== null) {
      let node = new ListNode()
      node.val = curr1.val
      curr1 = curr1.next
      curr2.next = node
      curr2 = curr2.next
    }
    return dummy.next
  }
  function partition(arr) {
    if(arr.length === 0) return null
    if(arr.length === 1) return arr[0]

    let m = arr.length >> 1
    let left = arr.slice(0, m)
    let right = arr.slice(m, arr.length)

    return merge(
      partition(left),
      partition(right)
    )
  }   

  return partition(lists)
};