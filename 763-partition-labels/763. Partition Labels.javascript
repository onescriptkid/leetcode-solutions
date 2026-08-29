/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  let ends = {}
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(ends[c] === undefined || ends[c] < i) ends[c] = i
  }  

  let out = []
  let upper = 0
  let count = 0
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    upper = Math.max(ends[c], upper)
    count++

    if(i === upper) {
      out.push(count)
      count = 0
    }
  }
  return out
};