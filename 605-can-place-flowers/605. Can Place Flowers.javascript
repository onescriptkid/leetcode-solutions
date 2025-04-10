/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

  let count = 0

  for(let i = 0; i < flowerbed.length; i++) {
    let num = flowerbed[i]
    let prev = flowerbed[i - 1] || 0
    let next = flowerbed[i + 1] || 0

    if(num === 0 && prev === 0 && next === 0) {
      flowerbed[i] = 1
      count++
    }
  }
  if(count >= n) {
    return true
  }
  return false
  // 0 0 0 0 1

};