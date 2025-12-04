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
var sortList = function(head) {


  function merge(left, right) {
    let dummy = new ListNode()
    let curr0 = dummy


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

  function partition(head) {
    let curr = head
    if(curr === null || curr.next == null) return curr
    //   1 2 3 4
    //         f
    // p   s

    let fast = head && head.next
    let prev = null
    let slow = head
    while(fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
    }

    let first = head
    let second = slow.next
    slow.next = null
    // console.log('first ', first)
    // console.log('second', second)

    return merge(
      partition(first),
      partition(second)
    )
  }
  return partition(head)
    
};