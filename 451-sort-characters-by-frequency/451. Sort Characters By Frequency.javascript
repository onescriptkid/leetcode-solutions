/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let frequencies = {};
    for( let c of s) {
        if(frequencies[c] === undefined) {
            frequencies[c] = 0;
        } else {
            frequencies[c]++;
        }
    }
    console.log(s, frequencies);
    let freqArr = Object.keys(frequencies).map(f => {return [f,frequencies[f]]});
    
    let sortedArr = freqArr.sort((a, b) => {
        if(a[1] < b[1]) {
            return 1
        } else {
            return -1
        } 
    });
    console.log(sortedArr);
    return sortedArr.reduce((acc, f) => {
        for(let i = 0; i < f[1]+1; i++ ) {
            acc.push(f[0]);
        }
        return acc;
    }, []).join('');                  
};