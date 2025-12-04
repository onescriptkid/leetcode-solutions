/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // 
    let small = str1.length < str2.length ? str1 : str2 
    let large = str1.length < str2.length ? str2 : str1 

    // ABABAB

    // ABAB
    // i

    let max = ""
    for(let i = 1; i <= small.length; i++) {
      let slice = small.slice(0, i)
      // console.log('slice', slice, 'max', max)
1
      let substr = slice
      while(substr.length < large.length) {
        substr+=slice 
      }

      let substr2 = slice
      while(substr2.length < small.length) {
        substr2+=slice
      }

      if(substr === large && substr2 === small) {
        // console.log('-', 'substr', substr, 'large', large)
        if(slice.length > max.length) max = slice

      }
    }

    return max

};