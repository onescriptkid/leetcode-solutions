/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    
  let out = 0
  for(let i = num1.length -1; i >= 0; i--){
    for(let j = num2.length - 1; j >= 0; j--) {
      
      let n1 = parseInt(num1[i] * 10**(num1.length - 1 -i))
      let n2 = parseInt(num2[j] * 10**(num2.length - 1 -j))
      out = out + (n1 * n2);
      console.log(n1, n2, out)
    }
  }
  return ""+out
};