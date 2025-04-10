/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {

  let words1 = s1.split(' ') 
  let words2 = s2.split(' ')

  let freq1 = {}
  for(let word of words1) {
    freq1[word] = (freq1[word] || 0) + 1
  }
  let freq2 = {}
  for(let word of words2) {
    freq2[word] = (freq2[word] || 0) + 1
  }

  let uncommon = []
  for(let word of Object.keys(freq1)) {
    if(freq1[word] === 1 && freq2[word] === undefined) {
      uncommon.push(word)
    }
  }
  for(let word of Object.keys(freq2)) {
    if(freq2[word] === 1 && freq1[word] === undefined) {
      uncommon.push(word)
    }
  }


  // for(let word1 of set1) {
  //   if(!set2.has(word1)) {
  //     uncommon.push(word1)
  //   }
  // }
  // for(let word2 of set2) {
  //   if(!set1.has(word2)) {
  //     uncommon.push(word2)
  //   }
  // }
  return uncommon
};