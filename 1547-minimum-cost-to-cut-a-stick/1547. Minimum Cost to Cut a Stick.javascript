/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
  //    0 1 2 3 4 5 6
  //  0   1   3 4 5   7
  //  l               r
  //      i
  
  cuts.sort((a,b) => a > b ? 1 : -1)
  cuts = [0, ...cuts, n]
  let memo = new Array(101).fill(0).map(v => new Array(101).fill(undefined))

  function dfs(l, r) {
    if(memo[l][r] !== undefined) return memo[l][r]
    if(r -l === 1) return 0

    let min = Infinity
    for(let i= l + 1; i < r; i++) {
      let opt = dfs(l, i) + dfs(i, r) + cuts[r] - cuts[l]
      min = Math.min(min, opt)
    }
    return memo[l][r] = min
  } 
  return dfs(0, cuts.length - 1)


//       cuts.sort((a, b) => a - b)
//     cuts = [0, ...cuts, n]

//     const stickLen = cuts.length

//     const dp = Array(stickLen).fill(0).map(() => Array(stickLen).fill(0))

//     for (let i = stickLen - 2; i >= 0; i--){
//         for (let j = i + 2; j < stickLen; j++){
//             let minCost = Infinity
//             for (let k = i + 1; k < j; k++){
//                 const cost = cuts[j] - cuts[i] + dp[i][k] + dp[k][j]
//                 minCost = Math.min(minCost, cost)
//             }

//             dp[i][j] = minCost
//         }
//     }
//     return dp[0][stickLen - 1]
// };
};