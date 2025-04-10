/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {


  let total = 0
  let i = 0
  let empty = 0
  while(i < numBottles) {
   empty++
   total++
  //  console.log('i', i, 'total', total, 'empty', empty) 
   if(empty === numExchange) {
    numBottles++
    empty = 0
   }
   
   i++
  }   
  return total
};