/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = ""+x;
    let arr = str.split('')
    
    let negative = false;
    if(arr[0] == '-') {
        negative = true;
        arr.shift();
    }
    
    let reverse = arr.reverse()
    if(negative) {
        reverse.unshift('-')
    }
    
    let reverseStr = reverse.join('')
    console.log(reverseStr)
    let reverseInt = parseInt(reverseStr)
    
    if(reverseInt >= 2147483647 || reverseInt <= -2147483648) {
        return 0
    }
    return reverseInt
    
};