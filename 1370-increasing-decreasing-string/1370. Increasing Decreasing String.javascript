/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let letters = {}
  for(let i = 0; i < alphabet.length; i++) {
    let c = alphabet[i]
    letters[c] = i
  }
  // 0 1 2
  // a b c
  // 4 4 4
  //     i
  let arr = new Array(26).fill(0)
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    let val = letters[c]
    arr[val]++
  }

  console.log('arr,', arr)

  let i = 0
  let dir = 'r'
  let str = ''
 
  while(str.length < s.length) {
    // console.log('str', str)

    while(arr[i] === 0) {
      if(dir === 'r') {
        i++
      } else {
        i--
      }

      if(i === arr.length) {
        i = arr.length - 1
        dir = 'l'
      }
      if(i === -1) {
        i = 0
        dir = 'r'
      }
    }

    let letter = alphabet[i]
    arr[i]--
    str+=letter

    if(dir === 'r') {
      i++
    } else {
      i--
    }
    if(i === arr.length) {
      dir = 'l'
      i--
    }
    if(i === -1) {
      dir = 'r'
      i++
    }
  }
  return str

};