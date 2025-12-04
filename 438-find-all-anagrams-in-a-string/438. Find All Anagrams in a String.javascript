/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let freqp = {}
  for(let c of p) {
    freqp[c] = (freqp[c] || 0) + 1
  }   
  let countp = Object.keys(freqp).length

  let l = 0
  let r = 0
  let freqw = {}
  let countw = 0 
  let out = []
  for(let i = 0; i < p.length; i++) {
    let c = s[i]
    r++
    freqw[c] = (freqw[c] || 0) + 1
    if(freqw[c] === freqp[c]) countw++
    if(countw === countp) out.push(l)
  }

  while(r < s.length) {
    let cr = s[r]
    r++
    freqw[cr] = (freqw[cr] || 0) + 1

    if(freqw[cr] === freqp[cr]) countw++

    let cl = s[l]
    l++
    freqw[cl]--
    if(freqw[cl]+1 === freqp[cl]) countw--

    if(countw === countp) out.push(l)
  }

  return out
};