/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    let count = 0; 
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    if( absDividend == 2147483648) { 
        return absDividend-1;
    }
    console.log(absDividend, divisor);
    while( (absDividend-absDivisor) >= 0) {
        count++;
        absDividend -= absDivisor;
    }
    if( ( dividend < 0 && divisor > 0 ) || (dividend > 0 && divisor < 0)) {
        count = 0-count 
    }
    return count;
    
};