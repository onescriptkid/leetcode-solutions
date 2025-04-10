/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    let merge = [];
    
    while(i < nums1.length || j < nums2.length) {
    
        if( i == nums1.length && j < nums2.length) {
            merge.push(nums2[j])
            j++
        }
        if( j == nums2.length && i < nums1.length) {
            merge.push(nums1[i])
            i++
        }
        if( nums1[i] < nums2[j]) {
            merge.push(nums1[i])
            i++
        }
        if( nums1[i] >= nums2[j]) {
            merge.push(nums2[j])
            j++
        }
        
    }
    console.log(merge);
    
    if(merge.length % 2 === 0) {
        return (merge[merge.length/2 -1] + merge[merge.length/2]) / 2;
    }
    return merge[(merge.length-1)/2];
    
};