/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  
    let stack = [];
    let maxArea = 0;
    for(index in heights) {
        index = parseInt(index)
        let height = heights[index];
        
        //stack logic
        if(stack.length > height) {
            stack.length = height;
        }
        if(stack.length < height) {
            stack = stack.concat(Array(height-stack.length).fill(index))
        }
        // console.log(stack)
        for(level in stack) {
            level = parseInt(level)
            width = stack[level]
            width = index - width +1;
            let area = width * (level+1);
            if(area > maxArea) {
                maxArea = area;
            }
        }
        
    }
    return maxArea;
};