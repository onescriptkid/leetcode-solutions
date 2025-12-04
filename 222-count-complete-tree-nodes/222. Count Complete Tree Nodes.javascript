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
 * @return {number}
 */
var countNodes = function(root) {
  function getLeftHeight(curr) {
    if(curr === null) return 0
    let h = 0
    while(curr !== null) {
      curr = curr.left
      h++
    }
    return h
  }
  function getRightHeight(curr) {
    if(curr === null) return 0
    let h = 0
    while(curr !== null) {
      curr = curr.right
      h++
    }
    return h
  }

  function dfs(curr) {
    if(curr === null) return 0

    let lh = getLeftHeight(curr)
    let rh = getRightHeight(curr)
    // console.log('curr', curr.val, 'lh', lh, 'rh', rh)

    if(lh === rh) {
      return 2**rh-1
    }

    return 1+dfs(curr.left) + dfs(curr.right)

  }
  return dfs(root)

};