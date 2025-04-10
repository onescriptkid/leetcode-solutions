/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {

  let freq = {}
  let count = 0
  for(let domino of dominoes) {
    let [a,b] = domino
    let forw = `${a},${b}`
    let back = `${b},${a}`
    // console.log('domino', domino,'count', count, 'freq', freq)
    // {12: 1, }

    if(freq[forw] !== undefined ) {
      count+=freq[forw]
    }
    if(freq[back] !== undefined && a !== b) {
      count+=freq[back]
    }

    freq[forw] = (freq[forw] || 0) + 1
  }
  return count
};