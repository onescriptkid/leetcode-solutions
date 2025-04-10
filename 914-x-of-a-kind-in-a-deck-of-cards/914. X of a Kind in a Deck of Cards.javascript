/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if(deck.length === 1) return false 
  let freq = {}
  for(let num of deck) {
    freq[num] = (freq[num] || 0) + 1
  } 

  // This migh actually be gcd
  function getLcm(arr) {
    // let s = a > b ? a : b
    // let l = a > b ? b : a
    let min = arr[0]
    for(let num of arr) {
      if(num < min) min = num
    }

    for(let i = 2; i <= min; i++) {
      let allTrue = true
      for(let num of arr) {
        if(num % i !== 0) {
          allTrue = false
          break;
        }
      }
      if(allTrue) {
        return i
      }
    }
    return -1
  }

  let num = 0
  let partition
  let minPartition = getLcm(Object.values(freq))
  if(minPartition === -1) {
    return false
  }
  // console.log('freq', freq, 'minPartition', minPartition)
  // for(let card of Object.keys(freq)) {
  //   let count = freq[card]
  //   if(minPartition === undefined) {
  //     minPartition = count
  //   } else {
  //     let lcm = getLcm(minPartition, count)

  //     if(lcm === -1) {
  //       console.log('ohno', lcm, 'card', card, 'count', count, 'minPartition', minPartition)
  //       return false
  //     }
  //     minPartition = lcm
  //   }
  //   if(count ===1) return false
  // }
  // console.log('minPartition', minPartition)
  for(let card of Object.keys(freq)) {
    let count = freq[card]
    if(count % minPartition !== 0) {
      return false
    }
  }
  return true
};