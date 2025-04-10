/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {

  let counts = {0:1}
  let curr = 0
  let i = 1
  while(counts[curr] !== 2) {
    let next = (curr + k * i) % n
    // console.log(counts, next)
    curr = next
    if(counts[curr] === undefined) {
      counts[curr] = 1
    } else {
      counts[curr]++
    }
    i++
  }

  let arr = []
  for(let i = 0; i < n; i++) {
    if(counts[i] === undefined) {
      arr.push(i+1)
    }
  }
  return arr

};