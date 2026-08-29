/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
  let intervals = startTime.map((v,k) => [startTime[k], endTime[k], profit[k]])   
  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)

  let memo = new Array(startTime.length).fill(undefined)

  function dfs(i) {
    if(i >= startTime.length) return 0
    if(memo[i] !== undefined) return memo[i]

    let opt1 = dfs(i+1)

    let l = i+1
    let r = intervals.length - 1
    let target = intervals[i][1]

    while(l <= r) {
      let m = Math.floor((l + r) / 2)
      let mid = intervals[m][0]

      if(mid < target) {
        l = m + 1
      } else {
        r = m - 1
      }
    }

    let opt2 = dfs(l) + intervals[i][2]

    return memo[i] = Math.max(opt1, opt2)
  }
  return dfs(0)
};