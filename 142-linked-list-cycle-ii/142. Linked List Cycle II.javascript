/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let nodeMap = {}
  let cycle = null
  let curr = head;

  let index = 0;
  while (curr !== null) {
    console.log('nodeMap',nodeMap, 'index', index)
    if (nodeMap[curr] !== undefined) {
      cycle = curr
      break;
    } else {
      nodeMap[curr] = curr.val
    }
    index++
    curr = curr.next
  }
  // console.log('cycle val',cycle.val)
  // console.log('curr', curr)
  return cycle
};