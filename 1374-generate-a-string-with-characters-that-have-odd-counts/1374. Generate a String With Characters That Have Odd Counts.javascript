/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  // 1 x
  // 2 xy
  // 3 xyz
  // 4 xxxy
  // 5 xxxyz
  // 6 xxxyyy
  if(n % 2 === 0) {
    let str = ''
    for(let i = 0; i < n - 1; i++) {
      str+='x'
    }
    str+='y'
    return str
  }

  let str = ''
  for(let i = 0; i < n; i++) {
    str+='x'
  }
  return str


};