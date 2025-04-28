/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.arr = []
  this.ptr = 0
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  this.arr[idKey-1] = value
  let out = []
  for(let i = this.ptr; i < this.arr.length; i++) {
    if(this.arr[i] === undefined) break;
    this.ptr++
    out.push(this.arr[i])
  }

  return out

  // 3 ccc
  // 1 aaa
  // 2 bbb
  // 5 eee
  // 4 ddd    
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */