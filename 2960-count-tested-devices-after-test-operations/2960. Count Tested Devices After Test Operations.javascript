/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {

  let count = 0

  for(let i = 0; i < batteryPercentages.length; i++) {
    let p = batteryPercentages[i]
    if(p > 0) {
      count++
    for(let j = i + 1; j < batteryPercentages.length; j++) {
      if(batteryPercentages[j] > 0) {
        batteryPercentages[j]--
      }
    }
    }
    // console.log(i, batteryPercentages)
  }
  return count
};