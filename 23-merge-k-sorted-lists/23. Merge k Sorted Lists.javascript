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
    let head = new ListNode()
    let curr0 = head

    let curr1 = left
    let curr2 = right

    while(curr1 !== null && curr2 !== null) {
      let node = new ListNode()
      if(curr1.val < curr2.val) {
        node.val = curr1.val
        curr1 = curr1.next
      } else {
        node.val = curr2.val
        curr2 = curr2.next
      }

      curr0.next = node
      curr0 = curr0.next
    }

    while(curr1 !== null) {
      let node = new ListNode(curr1.val)
      curr1 = curr1.next
      curr0.next = node
      curr0 = curr0.next
    }
    while(curr2 !== null) {
      let node = new ListNode(curr2.val)
      curr2 = curr2.next
      curr0.next = node
      curr0 = curr0.next
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
    let right = arr.slice(m,arr.length)

    return merge(
      partition(left),
      partition(right)
    )
  }

  return partition(lists)
};