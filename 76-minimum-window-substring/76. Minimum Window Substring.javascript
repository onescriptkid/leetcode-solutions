/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

  let freqt = {}
  for(let c of t) {
    freqt[c] = (freqt[c] || 0) + 1
  }
  let total = Object.keys(freqt).length

  let min
  let l = 0
  let r = 0
  let count = 0
  let freqw = {}
  // console.log('freqt', freqt)

  while(r < s.length) {
    // console.log('l r', l, r, 'count', count, s.substring(l, r+1))
    let cr = s[r]
    r++
    freqw[cr] = (freqw[cr] || 0) + 1
    if(freqt[cr] === freqw[cr]) {
      count++
    }

    while(l < r && count === total) {
    // console.log('  l r', l, r, 'count', count, s.substring(l, r+1))

      let len = r -l
      if(min === undefined) {
        min = s.substring(l, r)
      } else if(len < min.length) {
        min = s.substring(l,r)
      }

      let cl = s[l]
      l++
      freqw[cl]--
      if(freqt[cl] !== undefined && freqw[cl] < freqt[cl]) {
        count--
      }
    }
  }

  return min || ""
  // ADOBECODEBANC   ABC
  //       r
  // l

};