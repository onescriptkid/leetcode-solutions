/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {

  let out = []
  let start;
  let end;
  let prev;
  let count
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if(prev === undefined) {
      prev = c
      count = 1
      start = i
      continue
    } 
    if(prev !== c){
      if(count >= 3) {
        out.push([start, i - 1])
      }
      prev = c
      count = 1
      start = i
    } else {
      count++
    }
  }
  if(count >= 3) {
    out.push([start, s.length -1])
  }
  return out
};