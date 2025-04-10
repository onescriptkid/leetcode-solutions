/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {

  let out = []

  let j = 0
  let str = ""
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    str+=c
    if(str.length === k) {
      out.push(str)
      str= ""
    }
  }
  if(str.length !== 0) {
    // gh ghxxxxx
    //    6 - 2
    // console.log(str, k, k - str.length)
    let xlength = k - str.length
    for(let i = 0; i < xlength; i++) {
      str+=fill
    }
    // console.log(str)
    out.push(str)
  }
  return out
};