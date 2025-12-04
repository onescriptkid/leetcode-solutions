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

  function dfs1(curr, parent) {
    if(curr === null) return

    let val = curr.val
    if(adj[val] === undefined) adj[val] = []

    // parent
    if(parent !== null) {
      adj[val].push(parent.val)
    }

    // children
    if(curr.left !== null) {
      adj[val].push(curr.left.val)
    }
    if(curr.right !== null) {
      adj[val].push(curr.right.val)
    }

    dfs1(curr.left, curr)
    dfs1(curr.right, curr)
  }
  dfs1(root, null)

  // console.log('adj', adj)
  // 0 : 1
  // 1 : 3 0 8
  // 2 : 5 7 4
  // 4 : 2
  // 5 : 3 6 2
  // 6 : 5
  // 7 : 2
  // 8 : 0

  // let level = 1
  // let queue = [...adj[target.val]]
  // while(queue.length > 0 && level <= k) {
  //   let length = qu
  // }
  let out = []
  let visited = new Set()
  dfs(target.val, -1, 0)

  function dfs(u, p, level) {
    // console.log('u', u, 'p', p, 'level', level)
    if(level === k) {
      out.push(u)
      return true
    }
    for(let v of adj[u]) {
      if(v === p) continue
      if(visited.has(v)) return true
      dfs(v, u, level+1)
    }

    return false
  }

  return out


};