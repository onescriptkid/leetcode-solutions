/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let out = new Array(numRows).fill(0).map(v => [])   
  let dir = 'down'
  let i = 0

  for(let c of s) {
    out[i].push(c)

    if(dir === 'down') {
      i++
    } else {
      i--
    }

    if(i < 0) {
      i = 1
      if(i === numRows) i = 0
      dir = 'down'
    } else if(i === numRows) {
      i = numRows - 2
      if(i < 0) i = 0
      dir = 'up'
    }
  }

  let str = ''
  for(let arr of out) {
    for(let c of arr) {
      str+=c
    }
  }
  return str
};