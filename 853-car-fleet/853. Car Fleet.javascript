/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  let arr = []
  for(let i = 0; i < position.length; i++) {
    arr.push([position[i], speed[i]])
  }

  arr.sort((a,b) => a[0] > b[0] ? 1 : -1)
  let stack = []
  for(let [p, s] of arr) {
    let t = (target - p) / s

    while(stack.length > 0 && stack[stack.length - 1] <= t) {
      stack.pop()
    }
    stack.push(t)
  }
  return stack.length


};