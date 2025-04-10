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
var middleNode = function(head) {

//    1 2
//      s
//      f

//    1 2 3 4 5
//        s
//            f
let slow = head
let fast = head
while(fast !== null && fast.next !== null) {

  slow = slow.next
  fast = fast.next.next
}
return slow


};