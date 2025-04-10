/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {

  // abc  abb  ab
  //  i    
  //       j
  //            k

  // 
  let min = Math.min(s1.length, s2.length, s3.length)
  let same = 0
  for(let i = 0; i < min; i++) {
    if(s1[i] === s2[i] && s2[i] === s3[i]) {
      same++
    } else {
      break;
    }
  }
  if(same === 0) {
    return -1
  }

  //  abcdefgh
  //  abcdxx
  //  abcderr
  let d1  = s1.length - same
  let d2 = s2.length - same
  let d3 = s3.length - same
  return d1 + d2 + d3

};