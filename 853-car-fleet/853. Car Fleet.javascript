/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  // 0 1 2 3 4 5 6 7 8 9 10 11 12
  // 1     3   1     4   2
  // 1         2         3

  let fleets = 0
  // time = (target - position) / speed
  //      =  (12 - 10) / 2 => 2 / 2 => 1

  // tme= 12 3 7 1 1      (12 - 5) = 7 / 2 => 3.5
  // spd= 1  3 1 4 2
  // pos= 0  3 5 8 10

  let merge = position.map((v,k) => [position[k], speed[k]])
  // console.log('merge', merge)
  merge.sort((a,b) => a[0] > b[0] ? 1 : -1)
  // console.log('merge', merge)

  let stack = []
  for(let [p, s] of merge) {
    let time = (target - p) / s
    // console.log('spd', s, 'pos', p, 'time', time, '-', stack)

    while(stack.length !== 0 && stack[stack.length - 1] <= time) {
      stack.pop()
    }
    stack.push(time)
  }

  return stack.length


  return -1
};