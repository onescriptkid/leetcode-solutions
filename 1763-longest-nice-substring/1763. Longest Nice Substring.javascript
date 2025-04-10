/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {


  function isNice(str) {
    let set = new Set(str.split(''))
    for(let i = 0; i < str.length; i++) {
      let c = str[i]
      if(!set.has(c.toLowerCase()) || !set.has(c.toUpperCase())) {
        return false
      }
    }
    return true
  }

  let max = "" 
  for(let i = 0; i < s.length; i++) {
    for(let j = i+1; j < s.length+1; j++) {
      let sub = s.substring(i,j)
      // console.log(sub)
      if(isNice(sub)) {
        if(sub.length > max.length) {
          max = sub
        }
      }
    }
  }
  return max
};