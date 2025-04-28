/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  // 11 9,2
  function hasZero(num) {
    let str = ""+num
    let z = '0'
    for(let c of str) {
      if(c === '0') return true
    }
    return false
  }

  let i = 1
  while(i < n) {

    let a = n - i
    let b = i
    if(!hasZero(a) && !hasZero(b)) {
      return [a,b]
    }

    i++
  }
  return [-1,-1]

  // 101 99,2
  // 1000, 999,1
  // 1002, 999,3

  // 12

};