/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    height = heights
    let lessFromLeft = new Array(height.length) // idx of the first bar the left that is lower than current
    let lessFromRight = new Array (height.length) // idx of the first bar the right that is lower than current
    lessFromRight[height.length - 1] = height.length;
    lessFromLeft[0] = -1;

    // console.log('height', height)
    // console.log('left  ', lessFromLeft)
    // console.log('right ', lessFromRight)
    // console.log(' ')

    for (let i = 1; i < height.length; i++) {
        let p = i - 1;

        while (p >= 0 && height[p] >= height[i]) {
            p = lessFromLeft[p];
        }
        lessFromLeft[i] = p;
    }

    for (let i = height.length - 2; i >= 0; i--) {
        let p = i + 1;

        while (p < height.length && height[p] >= height[i]) {
            p = lessFromRight[p];
        }
        lessFromRight[i] = p;
    }
    // console.log('height', height)
    // console.log('left  ', lessFromLeft)
    // console.log('right ', lessFromRight)

    let maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        maxArea = Math.max(maxArea, height[i] * (lessFromRight[i] - lessFromLeft[i] - 1));
    }

    return maxArea;

};