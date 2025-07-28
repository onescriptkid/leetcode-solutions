/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
           if(s1.length + s2.length !== s3.length)return false

        let memo = {}

        function dfs(i, j,k) {
            let key = `${i},${j},${k}`
            // console.log(i,j,k, s1.slice(i), s2.slice(j), s3.slice(k))
            if(i === s1.length && j === s2.length) {
                if(k === s3.length) return true
                return false
            }
            if(memo[key] !== undefined) {
                return memo[key]
            }

            let opt1 = false 
            if(s1[i] === s3[k]) {
                opt1 = dfs(i+1,j,k+1) 
            }
            let opt2 = false
            if(s2[j] === s3[k]) {
                opt2 = dfs(i,j+1,k+1)
            }

            memo[key] = opt1 || opt2

            return memo[key]
        }
        return dfs(0,0,0) 
};