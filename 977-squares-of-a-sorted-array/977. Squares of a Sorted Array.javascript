/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let neg = []
  let pos = []
  let zeroes = []
  let out = []
  for(let num of nums) {
    if(num < 0) {
      neg.unshift(num*num)
      continue
    }
    if(num === 0) {
      zeroes.push(num*num)
      continue
    }
    if(num > 0) {
      pos.push(num* num)
      continue
    }
  }

  
  while(zeroes.length > 0) {
    out.push(zeroes.pop())
  }
  let i = 0
  let j = 0
  // console.log('neg', neg)
  // console.log('pos', pos)

  while(i <pos.length && j < neg.length) {
    if(pos[i] < neg[j]) {
      out.push(pos[i])
      i++
    } else {
      out.push(neg[j])
      j++
    }
  }
  while(i < pos.length) {
    out.push(pos[i]) 
    i++
  }
  while(j < neg.length) {
    out.push(neg[j])
    j++
  }
   return out
    
};