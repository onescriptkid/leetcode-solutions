/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {

   // 5
   // -2 -1 0 1 2
   // 4
   // -2 -1 1 2 

  let out = []

  for (let i = 1; i <= n >> 1; i++) {
    out.push(-i)
    out.push(i)
  } 
  if(n % 2 === 1) {
    out.push(0)
  }

  return out


};