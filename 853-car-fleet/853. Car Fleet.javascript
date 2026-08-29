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

  // 0 3 5 8 10
  // 1 3 1 4 2

  let stack = []
  for(let i = 0; i < arr.length; i++) {
    let [p, s] = arr[i]
    let time = (target - p) / s

    while(stack.length > 0 && stack.at(-1) <= time) {
      stack.pop()
    }

    stack.push(time)
  }
  return stack.length
};