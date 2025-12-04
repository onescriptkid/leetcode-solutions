/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

  for(let i = 0; i < haystack.length; i++) {

    let j = 0
    let k = i
    if(haystack[k] === needle[j]) {
      while(j < needle.length && haystack[k] === needle[j]) {
        j++
        k++
      }
      if(j === needle.length) return i
    }
  } 
  return -1
};