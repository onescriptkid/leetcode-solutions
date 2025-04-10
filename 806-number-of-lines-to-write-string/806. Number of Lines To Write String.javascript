/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {

  let lines = 1
  let currline = 0  
  // 
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let ltov = {}
  for(let i = 0; i < widths.length; i++) {
    ltov[alphabet[i]] = widths[i]
  }


  for(let c of s) {
    let width = ltov[c]
    // console.log('c', c, 'width', width, 'lines', lines, 'currline', currline)

    if((currline + width) > 100) {
      lines++
      currline = width
    } else {
      currline+=width
    }
  }
  return [lines, currline]
};