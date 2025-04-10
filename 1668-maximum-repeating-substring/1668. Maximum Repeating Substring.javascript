/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {


  // abab c ababab

  let max;
  let curr = 0;
  let i = 0; 
  while(i < sequence.length) {
    for(let j = i; j < sequence.length; j+=word.length) {
      let sub = sequence.substring(j, j+word.length)
      if(sub === word) {
        curr++
      } else {
        break;
      }
    }
    if(max === undefined) {
      max = curr
    } else if(max < curr){
      max = curr
    }
    i++
    curr = 0

  }

  // aaabaaaabaaabaaaabaaaabaaaabaaaaba
  //     aaabaaaabaaaabaaaabaaaabaaaaba

  return max
};