
var RandomizedSet = function() {
  this.arr = []
  this.map = new Map()    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.map.has(val)) return false
  this.map.set(val, this.arr.length)
  this.arr.push(val)
  return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(!this.map.has(val)) return false
  // 4 5 6 7   {4:0,5:1,6:2,7:3}
  // 4 7 6 7   {4:0,5:1,6:2,7:3}
  // 4 7 6 7   {4:0,5:1,6:2,7:1}
  let last = this.arr[this.arr.length - 1]
  let index = this.map.get(val)

  this.arr[index] = last
  this.map.set(last, index)

  this.arr.pop()
  this.map.delete(val)
  return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let rand = Math.floor(Math.random() * this.arr.length)
  return this.arr[rand]
    
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */