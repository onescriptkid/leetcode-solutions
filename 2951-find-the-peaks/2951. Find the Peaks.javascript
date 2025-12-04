/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {

  let out = []
  for(let i = 1; i < mountain.length - 1; i++) {
    let left = mountain[i-1]
    let curr = mountain[i]
    let right = mountain[i+1]
    if(curr > left && curr > right) {
      out.push(i)
    }
  } 
  return out
};