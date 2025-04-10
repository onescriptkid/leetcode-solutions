/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  if(k === 0) {
    return new Array(code.length).fill(0)
  }


  if(k > 0) {
    let out = []
    for(let i = 0; i < code.length; i++) {
      let num = code[i]
      let sum = 0
      // 0 1 2
      // 5 7 4
      // i j 
      for(let j = i+1; j < i + 1 + k; j++) {
        let val = code[j % code.length]
        sum+=val
      }
      out.push(sum)
    }

    return out
  }
  if(k < 0) {
    let out = []
    for(let i = 0; i < code.length; i++) {
      let num = code[i]
      let sum = 0
      // 0 1 2
      // 5 7 4
      // i j 

      // -1, -3
      // -1, -2
      for(let j = i-1; j > i - 1 + k; j--) {
        let index = j
        if(index  < 0) {
          index = code.length + j
        }
        let val = code[index]

        sum+=val
      }
      out.push(sum)
    }

    return out   
  }
};