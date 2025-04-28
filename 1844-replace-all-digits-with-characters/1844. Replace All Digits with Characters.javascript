/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let ltov = {}
  for(let i = 0; i < alphabet.length; i++) {
    ltov[alphabet[i]] = i
  }

  let arr = s.split('')
  for(let i = 0; i < arr.length; i+=2) {
    // console.log('i', i, 'arr', arr)

    if(arr[i+1] === undefined) continue


    let c = arr[i]
    let n = Number(arr[i+1])

    let lval = ltov[c] + n
    let r = alphabet[lval]
    arr[i+1] = r 

  }

  return arr.join('')
};