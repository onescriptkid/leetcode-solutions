/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const obj = {};
    
    for(let i = 0; i < nums.length; i++) {
        let v = nums[i];
        // console.log(v,obj)
        if(v in obj) {
            return v;
        } else {
            obj[v] =true;
        }
    };
    
};