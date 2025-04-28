/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {

  // 1 2 3 4     d=2
  // x x   x x
  
  // 1 2 3 4     [1,2] d=3
  // x x x
  //   x x x

  let end = -1
  let total = 0
  for(let i = 0; i < timeSeries.length; i++) {
    let ts = timeSeries[i]

    if(end < ts) {
      total+=duration
      end = ts+ duration -1
    } else {
      let overlap = ts + duration -1 - end
      total+=overlap
      end = ts+duration - 1
      //          = 2  + 3 - end
    }
  }
  return total

};