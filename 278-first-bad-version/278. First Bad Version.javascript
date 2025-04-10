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
      //       f
      // 0 1 2 3 4 5 6 7 8 9 
      // l       m         r
      //         b b b b b b
      // l   m   r
      // g g g   b b b b b b

      let l = 1
      let r = n
      let firstbad = undefined
      while(l <= r) {
        let m = Math.floor((l + r) / 2)
        let bad = isBadVersion(m)
        // console.log(l, m, r, 'bad', bad)

        if(bad) {
          if(firstbad === undefined) {
            firstbad = m
          }else if(m < firstbad) {
            firstbad = m
          }
          r = m - 1
        }
        if(bad === false) {
          l = m + 1
        }
      }
      return firstbad

    };
};