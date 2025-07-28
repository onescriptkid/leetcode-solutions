/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let out = []
  function dfs(curr) {
    if (curr === null) {
      out.push('n')
      return
    }
    out.push(curr.val)
    dfs(curr.left)
    dfs(curr.right)
  }
  dfs(root)
  return out.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let arr = data.split(',')
  if(arr.length === 0) return null
  let i = 0
  function dfs() {
    let c = arr[i]
    if(c === 'n') {
      i++
      return null
    }
    let node = new TreeNode(Number(c))
    i++
    node.left = dfs()
    node.right = dfs()
    return node
  }
  return dfs()
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */