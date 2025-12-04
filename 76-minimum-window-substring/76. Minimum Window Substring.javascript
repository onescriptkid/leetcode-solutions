/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let tfreq = {}
  for(let c of t) {
    tfreq[c] = (tfreq[c] || 0)  + 1
  }
  let tcount = Object.keys(tfreq).length

  let l = 0
  let r = 0
  let wcount = 0
  let wfreq = {}
  let min = ''
  console.log(tfreq)

  while(r < s.length) {
    // console.log('r', s.slice(l, r+1), '-', wcount, tcount)
    let cr = s[r]
    r++

    wfreq[cr] = (wfreq[cr] || 0) + 1
    if(wfreq[cr] === tfreq[cr]) wcount++

    while(l < r && wcount === tcount) {
      // console.log(' l', s.slice(l, r+1), '-', wcount)
      let len = r - l
      if(min === '' || len < min.length) {
        min = s.slice(l, r)
      }

      let cl = s[l]
      l++
      wfreq[cl]--
      if(wfreq[cl]+1 === tfreq[cl]) wcount--
    }
  }

  return min
};