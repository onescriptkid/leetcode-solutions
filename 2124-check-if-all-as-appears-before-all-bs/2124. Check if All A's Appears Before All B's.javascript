/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {

  // let maxb
  // let maxa
  let sawb = false
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(c === 'a')  {
      if(sawb === true) return false
    } else {
      sawb = true
    }
  }
  return true
};