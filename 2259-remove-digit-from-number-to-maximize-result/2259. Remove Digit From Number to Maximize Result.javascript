/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {

  // count
  let indicies = []
  for(let i = 0; i < number.length; i++) {
    let d = number[i]
    if(digit === d) {
      indicies.push(i)
      // c++
    }
  }
  if(indicies.length === 1) {
    let str = ""
    let count = 0
    for(let i = number.length - 1; i >= 0; i--) {
      let d = number[i]

      if(d === digit && count === 0) {
        count++
        continue
      }
      str = d + str
    }
    return str
  }

  let str = number
  for(let i = 0; i < indicies.length; i++) {
    let index = indicies[i]
    let val = number[index]
    let after = number[index+1]
    // 77954
    if(Number(val) < Number(after)) {
      return str.slice(0, index) + str.slice(index+1, str.length) 
    }
  }
  // let f = indicies[0]
  // let first = number[f]
  // let after = number[f+1]
  // let str = number
  // console.log(indicies)
  // if(Number(first) < Number(after)) {
    // remove first
    // console.log('f', f)
    // return str.slice(0, f) + str.slice(f+1, str.length) 
  // } else {
    let l = indicies[indicies.length - 1]
    let last = number[l]
    console.log('l', l)
    return str.slice(0, l) + str.slice(l+1, str.length)
    // let after = number[f+1]
    // remove second
  // }
  // let str = ""
  // for(let i = 0; i < number.length; i++) {
  //   let d = number[i]
  //   if(d === digit) {

  //   }
  // }


  return str
};