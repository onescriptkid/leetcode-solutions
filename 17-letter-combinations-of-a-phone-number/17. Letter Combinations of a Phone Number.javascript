/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }   

  let out = []
  let arr = []

  function bt(i) {
    if(arr.length >= digits.length) {
      out.push(arr.join(''))
      return
    }

    for(let j = i; j < digits.length; j++) {

      let chars = map[digits[j]]

      for(let char of chars) {
        arr.push(char)
        bt(j+1)
        arr.pop()
      }
    }
  }
  bt(0)
  return out
};