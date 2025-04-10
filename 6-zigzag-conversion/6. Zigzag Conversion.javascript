/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
  let zigzag = new Array(numRows).fill(0).map(v => new Array())
  
  let dir = 'down'
  let z = 0 
  for(let i = 0; i < s.length; i++) {
    let char = s[i]
    zigzag[z].push(char)
    if(z === zigzag.length -1) {
      dir = 'up'
    }
    if(z === 0) {
      dir = 'down'
    }
    if(dir == 'down') {
      z = z < zigzag.length - 1 ? z+1 : z
    } else {
      z = z > 0 ? z-1 : z
    } 
    
  }
  let out = ""
  zigzag.forEach(arr => out+=arr.join(''))
  return out
};