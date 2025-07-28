/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  let ends = {}

  for(let i = 0; i < s.length; i++) {
    let c = s[i]

    ends[c] = i
  }

  let part = ''
  let out = []
  let end = 0
  for(let i = 0; i < s.length; i++) {
    let c = s[i]

    if(ends[c] > end) {
      end = ends[c]
    }

    part+=c

    if(i === end) {
      out.push(part.length)
      part = ''
    }
  }
  return out
};