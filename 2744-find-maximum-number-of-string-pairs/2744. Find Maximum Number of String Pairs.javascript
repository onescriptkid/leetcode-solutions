/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {

  let freq = {}
  let count = 0
  for(let word of words) {
    // console.log('word', word, 'count', count)

    let rev = reverse(word)
    if(freq[word] !== undefined) {
      count+=freq[word]
    } 
    if(freq[rev] !== undefined) {
      count+=freq[rev]
    }

    freq[word] = (freq[word] || 0) + 1
    // console.log('-', count, freq)
  }

  function reverse(word) {
    // abcd
    //        a
    //       ba

    let str = ""
    for(let c of word) {
      str = c + str
    }
    return str
  }
  return count

};