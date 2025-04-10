/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // x ** 0 
  if(n === 0) {
    return 1
  }
  // x ** 1
  let mag = n
  if(n < 0) {
    mag = -n
  }

  // x ** n
  let ans = undefined;
  for(let i = 0; i < mag; i++) {
    if(ans === undefined) {
      ans=x
    } else {
      ans*=x
    }
  }


  // x**-n
  if(n < 0) {
    ans = 1 / ans
  }
  return ans
};