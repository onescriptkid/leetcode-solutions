/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let uniq = new Set()
    let min = 1
    nums.forEach(num => {
        
        if(num > 0) {
            uniq.add(num)
        }
        if(num === min) {
            min++
            while(uniq.has(min)) {
                min++
            }
        }
        
    })
    return min
};