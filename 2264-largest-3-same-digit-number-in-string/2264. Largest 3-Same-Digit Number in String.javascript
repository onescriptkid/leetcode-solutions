/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {

  let max = undefined
  let count = 0
  let prev = ""
  for(let i = 0; i < num.length; i++) {
    let n = num[i]
    if(n === prev) {
      count++
    } else {
      count = 1
    }

    if(count ===3) {
      if(max === undefined) {
        max = `${n}${n}${n}`
      } else if(Number(`${n}${n}${n}`) > Number(max)) {
        max = `${n}${n}${n}`
      }
    }
    prev = n
  }

  if(max === undefined) return ''
  return ""+max
};