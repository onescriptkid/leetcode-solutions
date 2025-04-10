/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    let tmp = head;
    let length = 0;
    while(tmp !== null){
        length++
        tmp = tmp.next
    }
    k = k % length;

    while (k > 0) {
        let curr = head;
        let prev = null;
        let next = null;

        while(curr !== null) {
            let next = curr.next
            if(next === null) {
                curr.next = head;
                head = curr
                if(prev !== null) {
                    prev.next = null
                } else {
                    curr.next = null 
                }
                break;
            }
            prev = curr 
            curr = curr.next
        }
        console.log(head)
        k--
    }       

    return head;
        
};