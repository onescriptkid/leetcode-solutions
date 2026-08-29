/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let freq = {}
  let maxc
  let max
  for(let task of tasks) {
    freq[task] = (freq[task] || 0) + 1
    if(max === undefined || freq[task] > max) {
      max = freq[task]
      maxc = task
    }
  }

  let chunks = max - 1 
  let idle = chunks * n

  for(let key in freq) {
    if(key === maxc) continue
    idle-= Math.min(freq[key], chunks)
  }

  return idle < 0 ? tasks.length : tasks.length + idle
  
  // A _ _ A _ _ A   
  // 0     1
};