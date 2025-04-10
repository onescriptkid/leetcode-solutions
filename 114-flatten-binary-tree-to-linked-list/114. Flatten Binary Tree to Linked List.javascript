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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {

    // Preorder
    let output = []
    let recurse = (root) => {
        if(root == null) {
            return
        }
        output.push(root)
        recurse(root.left)
        recurse(root.right)
    }
    recurse(root)
    
    let prev = null;
    while(output.length > 0){
        curr = output.shift()
        if(prev !== null) {
            prev.right = curr;
            prev.left = null;
        }
        prev = curr;
    }
       
};