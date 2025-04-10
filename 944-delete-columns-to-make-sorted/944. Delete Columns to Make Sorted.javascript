/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {

  let out = 0
  for(let i = 0; i < strs[0].length; i++) {
    let prev = undefined
    // p  abc
    // i  bce
    //    cae
    let p
    for(let str of strs) {
      let c = str[i]
      if(p !== undefined) {
        if(p > c) {
          // console.log(p, c)
          out++
          break;
        }
      }
      p = c
    }
  }  
  return out
};