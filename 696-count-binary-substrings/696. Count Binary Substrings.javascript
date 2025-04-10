/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {

  //  00110011   0 = 2, 1 = 0
  //   pi
  //  

  let ones = 0
  let zeros = 0
  let prev;
  let total = 0
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    // console.log('i', i, 'ones', ones, 'zeros', zeros, '-', 'total', total)
    if(c === "1") {
      ones++
    }
    if(c === "0") {
      zeros++
    }

    if(prev === "0" && c === "1") {
      ones = 1
    }
    if(prev === "1" && c === "0") {
      zeros = 1
    }

    if(c === "1" && ones <= zeros && zeros !== 0) {
      total++
    }
    if(c === "0" && zeros <= ones  && ones !== 0) {
      total++
    }




    prev = c
  }
  return total
};