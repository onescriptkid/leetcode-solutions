/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
  let freq = {}
  let max = 0
  for(let c of s) {
    freq[c] = (freq[c] || 0) + 1

    if(freq[c] > max) {
      max = freq[c]
    }
  }  
  let keys = Object.keys(freq).sort((a,b) => freq[a] > freq[b] ? -1 : 1)
  
  let limit = Math.ceil(s.length / 2)

  if(max > limit) return ''

  let i = 0
  let out = []
  for(let key of keys) {
    while(freq[key] > 0) {
      if(i >= s.length) i=1
      freq[key]--
      out[i] = key
      i+=2
    }
  }
  return out.join('')
};