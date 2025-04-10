/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    

  let max;
  let maxkey;
  // let prev;
  for(let i = 0; i< releaseTimes.length; i++) {
    let rt = releaseTimes[i]
    let c = keysPressed[i]
    let prev = releaseTimes[i - 1] || 0

    let duration = rt - prev
    if(max === undefined) {
      max = duration
      maxkey = c
    } else if(duration > max) {
      max = duration
      maxkey = c
    } else if(duration === max) {
      if(c > maxkey) {
        maxkey = c
      }
    }
  }
  return maxkey
};