/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
  // [[1,1],[3,7],[2,12],[7,17]]
  //     1     6     5      5    
  let max = undefined
  let maxid = undefined
  let prev = 0
  for(let i = 0; i < logs.length; i++) {
    let log = logs[i]
    let [id, leaveTime] = log
    let duration = leaveTime - prev

    if(max === undefined) {
      max = duration
      maxid = id
    } else if(duration > max) {
      max = duration
      maxid = id
    } else if(duration === max) {
      if(id < maxid) {
        maxid= id
      }
    }
    prev = leaveTime
  }
  return maxid
};