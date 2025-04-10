/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {

  function isPrefixAndSuffix(str1, str2) {
    if(str2.indexOf(str1) === -1) return false
    let prefix = str2.indexOf(str1) === 0

    let suffix = true
    // 01234
    // ababa  5 -2
    //    aa
    let j = 0
    for(let i = str2.length - str1.length; i < str2.length; i++) {
      if(str1[j] !== str2[i]) {
        suffix = false
        break;
      }
      j++
    }
    return suffix && prefix
  }    
  let count = 0 
  for(let i = 0; i < words.length; i++) {
    for(let j = i + 1; j < words.length; j++) {
      if(isPrefixAndSuffix(words[i], words[j])) {
        count++
      }
    }
  }


  return count
};