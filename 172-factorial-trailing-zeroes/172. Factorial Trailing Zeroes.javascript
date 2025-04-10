/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
   let curr = n;
   let zeros = 0
   while(curr > 0) {
       let partial = curr / 5;
       while(partial >= 1 && Number.isInteger(partial)) {
           zeros++
           partial = partial / 5
       } 
       curr--
   }
   return zeros
}