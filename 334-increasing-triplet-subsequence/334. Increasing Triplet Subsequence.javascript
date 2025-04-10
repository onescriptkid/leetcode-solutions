/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let storage = []
    
    for(let i = 0; i < nums.length; i++) {
        if(storage.length === 0) {
            storage.push([nums[i]])
        } else {
            console.log(storage)
            for( let arr of storage) { 
                if( nums[i] > arr[arr.length - 1]) {arr.push(nums[i])}
                if(arr.length === 3) {
                    return true
                }
            }
            storage.push([nums[i]])
        }
    }
    return false
};