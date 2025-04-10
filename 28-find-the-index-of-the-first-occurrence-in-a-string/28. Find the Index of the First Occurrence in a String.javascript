/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

  for(let i = 0; i < haystack.length; i++) {
    let ch = haystack[i]
    let cn = needle[0]
    // 012345678
    // sadbutsad    but
    //    i
    //    j

    if(ch === cn) {
      let found = true
      for(let j = 0; j < needle.length; j++) {
        let cn = needle[j]
        let ch = haystack[i+j]
        // console.log('cn', cn, 'ch', ch)
        if(cn !== ch) {
          found = false
          break;
        }
      }

      if(found) {
        return i
      }
    }
  }
  return -1

};