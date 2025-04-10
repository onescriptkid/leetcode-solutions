/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    
    if(l1 == null && l2 == null) {
        return null
    }
    
    let sum = 0;
    if(l1) {
        sum+=l1.val
    }
    if(l2) {
        sum+=l2.val
    }
    
    let carry = parseInt(sum / 10) //1
    let digit = sum % 10 //0
    let sumNode = new ListNode(digit)
    if(carry > 0) {
        if(l1 && l1.next) {
            l1.next.val += carry
        } else if(l2 && l2.next) {
            l2.next.val += carry
        } else if(l1) {
            l1.next = new ListNode(carry)
        } else if(l2) {
            l2.next = new ListNode(carry)
        }
    }
    sumNode.next = addTwoNumbers(l1 && l1.next, l2 && l2.next);    
    return sumNode
};