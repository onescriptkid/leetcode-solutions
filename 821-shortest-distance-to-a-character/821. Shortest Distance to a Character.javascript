/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    
  //    loveleetcode   c = 'e
  //    012345678901
  //       x xx    x
  //ltr ---010012340
  //rtl 321010043210
  // let out = []
  let ltr = []
  let last = Infinity
  for(let i = 0; i < s.length; i++) {
    if(s[i] === c) {
      last = 0
    } else {
      last++
    }
    ltr.push(last)
  }
  // console.log('ltr', ltr)

  let rtl = new Array(s.length)
  last = Infinity
  for(let i = s.length -1; i >= 0; i--) {
    if(s[i] === c) {
      last = 0
    } else {
      last++
    }
    rtl[i] = last
  }

  let out = []
  for(let i = 0; i < ltr.length; i++) {
    out.push(Math.min(ltr[i], rtl[i]))
  }

  return out


};