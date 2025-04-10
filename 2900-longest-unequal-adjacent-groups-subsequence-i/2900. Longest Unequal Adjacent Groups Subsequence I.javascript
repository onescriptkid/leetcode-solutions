/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
  // 1 2 3 4 5 6 7 7

  // 0 1 0 1 0 1 0 0 1
  // 0 1 1 1 1 1 1 1 1 0
  let curr = undefined
  let out = []
  for(let i = 0; i < groups.length; i++) {
    let group = groups[i]
    if(curr !== group) {
      out.push(words[i])
    }
    curr = group
  }
  return out
};