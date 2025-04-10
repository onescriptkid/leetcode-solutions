/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let distinct = []
    // [1,2,3] []
    // [1,2] [3]
    let recurse = (leftover, sofar) => {
        // console.log()
        // console.log(leftover, sofar)
        if(leftover.length === 0){
            distinct.push(sofar)
        }
        // Next Arrays
        let nextArrs = []
        for(let i = 0; i < leftover.length; i++) {
            nextArrs.push([...leftover])
        }
        // console.log(`nextArrs ${nextArrs} - leftover ${leftover}`)
        // Next arrays
        for(let i = 0; i < leftover.length; i++) {
            let nextValue = nextArrs[i].splice(i, 1)[0]
            let nextSofar = [...sofar]
            nextSofar.push(nextValue)
            // console.log(`nextValue ${nextValue}`, `nextSofar ${nextSofar} i ${i} sofar ${sofar}`)
            recurse(nextArrs[i], nextSofar)
        }
    }
    recurse(nums, [])
    return distinct
};