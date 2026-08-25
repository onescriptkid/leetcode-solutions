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
  function merge(curr1, curr2) {
    let dummy = new ListNode()
    let curr0 = dummy

    while(curr1 !== null && curr2 !== null) {
      let node = new ListNode()
      if(curr1.val < curr2.val) {
        node.val = curr1.val
        curr1 = curr1.next
      } else {
        node.val = curr2.val
        curr2 = curr2.next
      }
      curr0.next= node
      curr0 = curr0.next
    }

    while(curr1 !== null) {
      let node = new ListNode()
      node.val = curr1.val
      curr1 = curr1.next

      curr0.next = node
      curr0 = curr0.next
    }

    while(curr2 !== null) {
      let node = new ListNode()
      node.val = curr2.val
      curr2 = curr2.next 

      curr0.next = node
      curr0 = curr0.next
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