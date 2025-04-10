/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {

  let prev
  let maxones = 0
  let maxzeroes = 0;

  let count = 0
  for (let i = 0; i < s.length; i++) {
    let curr = s[i]
    if(prev !== undefined) {
      if(curr === "1") {
        count++
        if(maxones === undefined) {
          maxones = count
        } else if(count > maxones) {
          maxones = count
        }
      } else {
        count = 0
      }
    } else {
      if(curr === "1") {
        count = 1
        if(maxones === undefined) {
          maxones = count
        } else if(count > maxones) {
          maxones = count
        }
      }
    }
    prev = curr
  }

  count = 0
  for (let i = 0; i < s.length; i++) {
    let curr = s[i]
    if(prev !== undefined) {
      if(curr === "0") {
        count++
        if(maxzeroes === undefined) {
          maxzeroes = count
        } else if(count > maxzeroes) {
          maxzeroes = count
        }
      } else {
        count = 0
      }
    } else {
      if(curr === "0") {
        count = 1
        if(maxzeroes === undefined) {
          maxzeroes = count
        } else if(count > maxzeroes) {
          maxzeroes = count
        }
      }
    }
    prev = curr
  } 
  console.log(maxones, maxzeroes)
  return maxones > maxzeroes
};