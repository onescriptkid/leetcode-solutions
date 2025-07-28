/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let dm = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  let out = []
  function dfs(i, arr) {
    if(i === digits.length) {
      if(arr.length === 0) return
      out.push(arr.join(''))
      return
    }

    let digit = digits[i]
    let letters = dm[digit]
    for(let letter of letters) {
      // let letter = letters[i]
      arr.push(letter)  
      dfs(i+1, arr)
      arr.pop()
    }
  }
  dfs(0, [])
  return out
};