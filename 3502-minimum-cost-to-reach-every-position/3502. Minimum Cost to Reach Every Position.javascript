/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) {
  // 0 1 2 3 4 5 n
  //
  // 5 3 5 1 3 2 x
  // 5 3 3 1 1 1 1            
  let min
  let out = []
  for(let c of cost) {
    if(min === undefined) {
      min = c
    } else if(c < min) {
      min = c
    }
    out.push(min)
  }
  return out
};