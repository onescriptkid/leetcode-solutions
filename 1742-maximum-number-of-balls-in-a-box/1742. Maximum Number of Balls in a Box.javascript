/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {

  // 2 6
  // 2 3 4 5 6 => 5 = 6 - 2 + 1   

  let boxes = {}

  let max = undefined;
  for (let i = lowLimit; i <= highLimit; i++) {

    // Sum of digits
    let sum = 0
    let num = i
    while(num > 0) {
      let digit = num % 10
      sum+=digit
      num = Math.floor(num / 10)
    }
    // console.log(i, sum)

    //
    if(boxes[sum] === undefined) {
      boxes[sum] = 1
    } else {
      boxes[sum]++
    }

    //
    if(max === undefined) {
      max = boxes[sum]
    } else if (boxes[sum] > max) {
      max = boxes[sum]
    }
  }
  // console.log(boxes)
  return max
};