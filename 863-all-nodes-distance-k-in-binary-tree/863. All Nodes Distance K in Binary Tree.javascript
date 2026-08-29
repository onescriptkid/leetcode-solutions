/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
  let adj = {}
  function dfs(curr, parent) {
    if(curr === null) return

    if(adj[curr.val] === undefined) {
      adj[curr.val] = []
    }
    if(parent && adj[parent.val] === undefined) {
      adj[parent.val] = []
    }
    if(parent) {
      adj[curr.val].push(parent.val)
      adj[parent.val].push(curr.val)
    }
    dfs(curr.left, curr)
    dfs(curr.right, curr)
  }   
  dfs(root, null)

  let out = []
  let visited = new Set()
  dfsg(target.val, -1, 0)   

  function dfsg(u,p, level) {
    visited.add(u)

    if(level === k) {
      out.push(u)
      return
    }

    for(let v of adj[u]) {
      if(v === p) continue
      if(visited.has(v)) continue
      dfsg(v, u, level+1)
    }
  }

  return out
};