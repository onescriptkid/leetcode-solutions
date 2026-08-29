/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let pfreq = {}
  for(let c of p) {
    pfreq[c] = (pfreq[c] || 0)  + 1
  }
  let pcount = Object.keys(pfreq).length

  let l = 0
  let r = 0
  let wfreq = {}
  let wcount = 0
  let out = []

  for(let i = 0; i < p.length; i++) {
    let cr = s[r]
    r++
    wfreq[cr] = (wfreq[cr] || 0) + 1
    if(wfreq[cr] === pfreq[cr]) wcount++
    if(wcount === pcount) out.push(l)
  }
  
  while(r < s.length) {
    let cr = s[r]
    r++
    wfreq[cr] = (wfreq[cr] || 0) + 1
    if(wfreq[cr] === pfreq[cr]) wcount++

    let cl = s[l]
    l++
    wfreq[cl]--
    if(wfreq[cl]+1 === pfreq[cl]) wcount--

    if(wcount === pcount) out.push(l)
  }

  return out
};