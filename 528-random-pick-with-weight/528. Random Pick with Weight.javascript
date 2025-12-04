/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.sum = 0
  this.prefixsums = []
  for(let val of w) {
    this.sum+=val
    this.prefixsums.push(this.sum)
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  let rand = Math.floor(Math.random() * (this.sum))

  let l = 0
  let r = this.prefixsums.length - 1
  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = this.prefixsums[m]

    if(mid === rand) {
      l = m + 1
    }
    if(mid < rand) {
      l = m + 1
    }
    if(mid > rand) {
      r = m - 1
    }
  }
  return l

};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */