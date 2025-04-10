/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
   // 101 5
   // 111
   // 1
   // 3
   // 7
   // 8421
   let i = 1
   while(n > (2**i -1)) {
    i++
   }
   return 2 ** i - 1
};