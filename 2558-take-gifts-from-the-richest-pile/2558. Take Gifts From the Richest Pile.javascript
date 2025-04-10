/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {


  // 25 64 9 4 100
  // 25 64 9 4 10
  // 25 8 9 4 10
  //  5 8 9 4 10
  //  5 8 3 4 3

  for(let i = 0; i < k; i++) {

    let max;
    let maxIndex;
    for(let j = 0; j < gifts.length; j++) {
      let gift = gifts[j]
      if(max === undefined) {
        max = gift
        maxIndex = j
      } else if(gift > max) {
        max = gift
        maxIndex = j
      }
    }
    gifts[maxIndex] = Math.floor(max ** 0.5)
  }

  let sum = 0
  for(let g of gifts) {
    sum+=g
  }
  // console.log(gifts, sum)

  return sum 
};