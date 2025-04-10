/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {

  // xyzabc
  //   i
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let letters = {}
  for(let i = 0; i < alphabet.length; i++) {
    letters[alphabet[i]] = i
  }

  // {a:0, b:1, ... z:25}
  let t = 'a'
  let total = 0
  for(let i = 0; i < word.length; i++) {
    let c = word[i]
    let tval = letters[t]
    let cval = letters[c]
    // xyzabc
    //     tc
    
    // xyzabc
    //    c t 
    let cw
    if(cval >= tval) {
      cw = cval - tval
    } else {
      cw = (26 - tval) + cval
    }

    let ccw
    if(cval <= tval) {
      ccw = tval - cval
    } else {
      ccw = tval + (26 - cval)
    }
    let dist = 1 + Math.min(cw, ccw)
    t = c
    total+=dist
    // console.log('c', c, 't', t, 'cval', cval, 'tval', tval, 'cw', cw, 'ccw', ccw, 'dist', dist, 'total', total)
  }
  return total
};