/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {

  let arr = s.split('')

  // 45320
  
  // 45320
  //  ij
  for(let i = 0; i < s.length; i++) {
    let c0 = arr[i]
    let c1 = arr[i+1]
    if(c1 === undefined) continue

    let n0 = Number(c0)
    let n1 = Number(c1)

    if(n0 % 2 === n1 % 2 && n0 > n1) {
      let tmp = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = tmp
      break;
    }
  }
  return arr.join('')

};