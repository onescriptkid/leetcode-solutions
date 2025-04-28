/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
           if (x >= 0) {
            let tmp = x
            let rev = 0
            while(tmp > 0) {
                let digit = tmp % 10
                rev = rev * 10 + digit
                if(rev > 2**31 -1) {
                    return 0
                }
                tmp = Math.floor(tmp / 10)
            }
            return rev
        } else {
            // x = -x
            let tmp = x
            let rev = 0
            while(tmp < 0) {
                // console.log('tmp', tmp, 'rev', rev)
                let digit = tmp % 10
                rev = rev * 10 + digit
                if(rev < -(2**31) ) {
                    return 0
                }
                tmp = Math.ceil(tmp / 10)
            }
            return rev           
        }

    } 
