/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {

  let peaks = []
  for(let i = 0; i < mountain.length; i++) {
    if(i === 0 || i === mountain.length - 1) {
      continue
    }
    if(mountain[i] > mountain[i-1] && mountain[i] > mountain[i+1]) {
      peaks.push(i)
    }
  } 
  return peaks
};