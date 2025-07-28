/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let freq = {}
  let maxc
  let maxf = 0
  for(let task of tasks) {
    freq[task] = (freq[task] || 0) + 1
    if(freq[task] > maxf) {
      maxf = freq[task]
      maxc = task 
    }
  }

  let chunks = (maxf - 1)
  let idle = chunks * n

  for(let task of Object.keys(freq)) {
    if(task !== maxc) idle-=Math.min(freq[task], chunks)
  }

  return idle < 0 ? tasks.length : tasks.length + idle

};