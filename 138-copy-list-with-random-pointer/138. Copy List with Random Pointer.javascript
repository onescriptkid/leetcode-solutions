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
           // Map
        // { oldNode: newNode }
        // if map.has(old) newNode.
        let map = new Map()
        let curr = head;
        let prev = null
        let newHead = null;
        while(curr !== null) {
            let newNode = new _Node(curr.val)
            if(newHead === null) {
                newHead = newNode
            }
            if(prev !== null) {
              prev.next = newNode
            }
            map.set(curr, newNode)
            prev = newNode
            curr = curr.next
        }

        curr = head;
        // console.log(map)
        while(curr !== null) {
            let newNode = map.get(curr)
            console.log()
            console.log(curr.val, curr.random && curr.random.val)
            newNode.random = map.get(curr.random)
            curr = curr.next
        }

        return newHead 
};