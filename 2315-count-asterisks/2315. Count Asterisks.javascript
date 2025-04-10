/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
  let pairs = s.split('|')   
  // [l, eet, co, de]
  let count = 0
  console.log(pairs)
  for(let i = 0; i < pairs.length; i++) {
    let pair = pairs[i]
    if(i % 2 === 0) {
      // let chars = pair
      for(let j = 0; j < pair.length; j++) {
        let c = pair[j]
        // console.log(pair)
        if(c === '*') count++
      }
    }
  }
  return count;
};