/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let tfreq = {}
  for(let c of t) {
    tfreq[c] = (tfreq[c] || 0) + 1
  }   
  let tcount = Object.keys(tfreq).length

  let r = 0
  let l = 0
  let min = ''
  let wcount = 0
  let wfreq = {}

  while(r < s.length) {
    let cr = s[r]
    r++

    wfreq[cr] = (wfreq[cr] || 0) + 1
    if(wfreq[cr] === tfreq[cr]) wcount++

    while(l < s.length && wcount === tcount) {
      let len = r - l
      if(min === '' || len < min.length) min = s.slice(l, r)

      let cl = s[l]
      l++

      wfreq[cl]--
      if(wfreq[cl] +1 === tfreq[cl]) wcount--
    }

  }

  return min
};