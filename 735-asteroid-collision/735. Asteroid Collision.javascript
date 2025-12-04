/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {

  let stack = []
  for(let inc of asteroids) {

    let destroy = false
    while(stack.length > 0) {
      let top = stack[stack.length - 1]

      // [5] -5
      if(top > 0 && inc < 0 && Math.abs(top) === Math.abs(inc)) {
        destroy = true
        stack.pop()
        break;
      }
      // [10] -5
      if(top > 0 && inc < 0 && Math.abs(top) > Math.abs(inc)) {
        destroy = true
        break;
      }
      // [5] -10
      if(top > 0 && inc < 0 && Math.abs(top) < Math.abs(inc)) {
        stack.pop()
        continue
      }

      if(top < 0 && inc < 0) break;
      if(top > 0 && inc > 0) break;
      // [-5] 5
      if(top < 0 && inc > 0) break;
    }

    if(!destroy) stack.push(inc)


  }   
  return stack
};