/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.stack = []
  this.curr = root
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  // []   curr=7
  // [7,3]
  let curr = this.curr
  while(curr !== null) {
    this.stack.push(curr)
    curr = curr.left
  }

  let out = this.stack.pop()
  this.curr = out.right

  return out.val
    
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length !== 0 || this.curr !== null  
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */