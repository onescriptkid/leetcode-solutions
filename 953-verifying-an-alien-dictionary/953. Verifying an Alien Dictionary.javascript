/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  let ltov = {}
  for (let i = 0; i < order.length; i++) {
    ltov[order[i]] = i
  }

  // hellod hello

  for(let i = 0; i < words.length-1; i++) {
    let curr = words[i]
    let next = words[i+1]
    // console.log('curr', curr, 'next', next)
    for(let j = 0; j < curr.length; j++) {
      let c = curr[j]
      let n = next[j]
      // console.log('  ', 'c', c, 'n', n)
      if(n === undefined) {
        return false
      }
      if(c === n) continue
      let cv = ltov[c]
      let nv = ltov[n]

      if(cv > nv ) {
        return false
      } else {
        break;
      }
    }
  }
  return true
};