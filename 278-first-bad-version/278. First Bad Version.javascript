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
      // 1 2 3 4 5 6 7 8 9 10   (l+r)/2 => (10+1)/2 => 5.5 => 5
      // b b b b g g g g g g
      // l       m         r
      
      // 1 2 3 4 5 6 7 8 9 10   (l+r)/2 => (4+1)/2 => 2.5 => 2
      // b b b b g g g g g g
      // l m   r 
      let l = 1
      let r = n 
      let first

      while(l <= r) {
        let m = Math.floor((l + r) / 2)
        let mid = isBadVersion(m)
        if(mid === true) {
          if(first === undefined) {
            first = m
          } else if(m < first) {
            first = m
          }
        }

        if(mid === false) {
          l = m + 1
        }
        if(mid === true) {
          r = m - 1
        }
      }
      return first


    };
};