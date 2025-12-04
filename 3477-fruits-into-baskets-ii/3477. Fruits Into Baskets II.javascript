/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
  // a o p
  // 4 2 5     3 5 4 
  //           
  
  // 4 2 5     3 5 4 
  //           3 1 2   =>  5

  let hash = {} // b to type
  let filled = new Array(baskets.length).fill(0)
  // let total = 0

  for(let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i]
    // console.log('i', i, 'fruits', fruits)
    for(let j = 0; j < baskets.length; j++) {
      if(filled[j] === 0 && baskets[j] >= fruit) {
        fruits[i] = 0
        filled[j] = 1
        break;
      }
    }
  }
  let total = 0
  // console.log(fruits)
  for(let fruit of fruits) {
    if(fruit!== 0) total++
  }
  return total
};