/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  // odd  
  if(n % 2 === 1) {
    let str = ''
    for(let i = 0; i < n; i++) {
      str+='x'
    }
    return str
  }

  let str = ''
  for(let i = 0; i < n-1; i++) {
    str+='x'
  }
  str+='y'
  return str


};