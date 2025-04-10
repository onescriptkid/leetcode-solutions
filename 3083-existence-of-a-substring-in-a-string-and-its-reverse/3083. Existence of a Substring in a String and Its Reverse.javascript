/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {

  // leetcode
  //  ^^
  // abcba
  // ^^ ^^
  let p;
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(p !== undefined) {
      if(p === c) {
        return true
      }
    }
    p = c
  } 

  let forwardmap = {}
  let reversemap = {}
  for(let i = 0; i < s.length-1; i++) {
    let sub = s.substring(i,i+2)

    //ab
    // let rev = sub[1] + sub[0]
    forwardmap[sub] = sub

    // if(s.indexOf(rev) !== -1) {
    //   return true
    // }

  }
  for(let i = 0; i < s.length- 1; i++) {
    let sub = s.substring(i, i+2)
    let rev = sub[1] + sub[0]
    if(forwardmap[rev] !== undefined) return true
  }
  return false
  // abcba
  // ^^ ^^
};