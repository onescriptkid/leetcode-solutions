/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      //   1 2 3 4 5 6 7 8 9
      //   l       m       r
      let l = 1
      let r = n
      let first
      while(l <= r) {
        let m = Math.floor((l + r) / 2)
        let isbad = isBadVersion(m)

        if(isbad) {
          r = m - 1

          if(first === undefined || m < first) {
            first = m
          }

        } else {
          l = m + 1
        }

      }

      return first

      //   0 1 2 3 4 5 6 7 8  
      //   ? ? ? ? b b b b b
      //   l       m       r
    };
};