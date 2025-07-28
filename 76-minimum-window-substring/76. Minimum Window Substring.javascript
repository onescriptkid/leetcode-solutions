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
  let tcount = Object.keys(freqt).length

  let freqw = {}
  let l = 0
  let r = 0
  let count = 0
  let min

  while(r < s.length) {
    // console.log('l r', l, r, s.slice(l, r+1), min)
    let cr = s[r]
    r++
    freqw[cr] = (freqw[cr] || 0) + 1
    if(freqw[cr] === freqt[cr]) count++

    while(l < r && count === tcount) {
      // console.log('   ', l, r, s.slice(l, r+1), min)

      if(min === undefined) {
        min = s.slice(l, r)
      } else if(r-l < min.length) {
        min = s.slice(l, r) 
      }

      let cl = s[l]
      l++
      freqw[cl]--
      if(freqt[cl] !== undefined && freqw[cl] < freqt[cl]) count--
    }
    
  }
  return min || ''

};