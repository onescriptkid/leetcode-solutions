/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let k = j+1; k< nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if(closest === undefined) {
                    closest = nums[i] + nums[j] + nums[k];    
                } else if( Math.abs(sum-target) < Math.abs(closest - target)) {
                    closest = sum;
                }
            }
        }
    }
    return closest;
};