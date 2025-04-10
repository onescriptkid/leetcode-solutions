/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {

  let out = []
  function dfs(curr) {
    if(curr === null) {
      return
    }
    for(let i = 0; i < curr.children.length; i++) {
      let child = curr.children[i]//curr.children[curr.children.length -1 -i]
      dfs(child)
    }
    out.push(curr.val)
  }   
  dfs(root)
  return out
};