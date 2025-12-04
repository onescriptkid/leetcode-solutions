/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
  let intervals = startTime.map((v,k) => [startTime[k], endTime[k], profit[k] ])

  // 1 2 3 4 5 6
  // 1---3        50
  //   2---4      10
  //     3-----6  70
  //     3---5    40

  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)
  let memo = new Array(startTime.length).fill(undefined)


  function dfs(i) {
    if(i >= startTime.length) return 0
    if(memo[i] !== undefined) return memo[i]

    let opt1 = dfs(i+1)


    // let j = i+1
    // while(j < intervals.length && intervals[j][0] < intervals[i][1]) {
    //   j++
    // }
    // 1---3          => 3

    // 1-----4
    //   2-----5
    //     3-----6
    //     3---5
    //           6-----7

    // 1 2 3 3 5 6 7
    // l     m     r

    let l = i +1
    let r = intervals.length - 1
    let target = intervals[i][1]
    while(l <= r) {
      let m = Math.floor((l + r) / 2)
      let mid = intervals[m][0]
      if(mid === target) {
        r = m - 1
      }
      if(mid < target) {
        l = m + 1
      }
      if(mid > target) {
        r = m - 1
      }
    }


    // console.log('i', i, intervals[i], 'j', j, intervals[j])

    // let opt2 = intervals[i][2] + dfs(j)
    let opt2 = intervals[i][2] + dfs(l)

    return memo[i] = Math.max(opt1, opt2)
  }
  return dfs(0)
};