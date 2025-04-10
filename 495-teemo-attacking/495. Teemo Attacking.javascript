/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {

  // 1 2 3 4    d = 2
  // x x
  //       x x

  // 1 2        d = 2
  // x x x
  //   x x x

  let prevend = -1
  let total = 0
  for(let attack of timeSeries) {
    // 
    // 1 + 2 - 1 =>  2
    // 2 + 2 - 1 =>  3
    let currend = attack + duration - 1 
    // console.log('a', attack, 'currend', currend,'prevend', prevend, 'total', total)
    if(attack > prevend) {
      total+=duration
      prevend = currend
    } else {
      let poison = currend - prevend
      total+=poison
      prevend = currend
    }

  }
  return total

};