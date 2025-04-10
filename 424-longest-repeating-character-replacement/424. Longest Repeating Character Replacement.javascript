/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

  // AABABBA
  let set = new Set(s)
  let max = 0
  for(let c of set) {

    let count = 0
    let l = 0
    let r = 0
    while(r < s.length) {
      let cr = s[r]
      r++
      if(cr !== c) {
        count++
      } 

      while(l <r && count > k) {
        let cl = s[l]
        l++
        if(cl !== c) {
          count--
        }
      }

      let len = r - l
      if(max === undefined) {
        max = len
      } else if(len > max) {
        max = len
      }
    }
  }
  return max

};