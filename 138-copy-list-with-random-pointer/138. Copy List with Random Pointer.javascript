/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {

  let curr = head    
  let map = new Map()

  let dummy = new Node()
  let curr0 = dummy

  while(curr !== null) {
    let node = new Node(curr.val)
    
    curr0.next = node
    curr0 = curr0.next
    map.set(curr, curr0)
    
    curr = curr.next
  }

  // 7 13 11 10 1    curr.random
  // c
  
  // 7 13 11 10 1    curr0.random
  // 0

  curr = head
  while(curr !== null) {
    let curr0 = map.get(curr)
    let random = curr.random
    let nrandom = map.get(random)

    curr0.random = nrandom

    curr = curr.next
  }

  return dummy.next
  
};