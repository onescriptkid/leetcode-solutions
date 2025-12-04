/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let j = 0
  for(let i = 0; i < t.length; i++) {
    let ct = t[i]
    let cs = s[j]

    if(ct === cs) j++
  }

  return j === s.length
    
};