/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {

  let digits = new Set('0123456789'.split(''))


  let num = "" 
  let set = new Set()
  // a123
  //     i
  for(let i = 0; i < word.length; i++) {
    let c = word[i]

    if(digits.has(c)) {
      num+=c
    } else {
      if(num.length > 0) {

        let nozeroes = ""
        let flag = false
        for(let i = 0; i < num.length; i++) {
          let nc = num[i]
          if(flag === true) {
            nozeroes+=nc
          }
          if(flag === false) {
            if(nc === '0') {
              continue
            }
            if(nc !== '0') {
              nozeroes+=nc
              flag = true
            }
          }
        }

        set.add(nozeroes)
      }
      num = ""
    }
  }
  if (num.length > 0) {
    let nozeroes = ""
    let flag = false
    for (let i = 0; i < num.length; i++) {
      let nc = num[i]
      if (flag === true) {
        nozeroes += nc
      }
      if (flag === false) {
        if (nc === '0') {
          continue
        }
        if (nc !== '0') {
          nozeroes += nc
          flag = true
        }
      }
    }
    set.add(nozeroes)
  }
  console.log(set)
  return set.size
};