/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
        // ((**)
        // ((
        // ((*    c=1
        // ((**   c=2
        // ((**)  c=1
        // (( *

        // (((
        let stack = []
        let count = 0
        for(let c of s) {

            if(c === '(') {
                stack.push('(')
            }

            if(c===')' && stack.length === 0) {
                return false
            }
            if(c === ')') {
                stack.pop()
            }

            if(c=== '*') {
                count++
                stack.push('*')
            }
        }
        // console.log('stack', stack, 'count', count)
        // ((( ***
        if(stack.length === count) return true
        
        // (((( ***
        // ((** ***
        if(stack.length > count) {
            let left = 0
            for(let s of stack) {
                if(s === '(') left++
            }
            return left <= count
        }
        
        // (((( *****
        if(stack.length < count) return true

        

};