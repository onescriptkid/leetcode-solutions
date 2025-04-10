/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  let str = "" + num
  let arr = str.split('')

  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if(num === '6') {
      arr[i] = '9'
      break;
    }
  }
  let newstr = arr.join('')
  return Number(newstr)
};