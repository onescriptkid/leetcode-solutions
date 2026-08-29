/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
  cuts = [ 0, ...cuts, n]
  cuts.sort((a,b) => a > b ? 1 : -1)
  let memo = new Array(cuts.length).fill(0).map(v => new Array(cuts.length).fill(undefined))

  function dfs(l, r) {
    if(r - l <= 1) return 0
    if(memo[l][r] !== undefined) return memo[l][r]

    let opts = []
    for(let i = l + 1; i < r; i++) {
      let opt = dfs(l, i) + dfs(i, r) + cuts[r] - cuts[l]
      opts.push(opt)
    }

    return memo[l][r] = Math.min(...opts)
  }
  return dfs(0, cuts.length - 1)
};