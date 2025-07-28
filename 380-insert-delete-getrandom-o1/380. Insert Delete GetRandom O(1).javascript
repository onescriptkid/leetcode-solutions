
var RandomizedSet = function() {
  this.map = new Map()
  this.arr = []    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.map.has(val)) return false
  this.map.set(val, this.arr.length)
  this.arr.push(val)

  // [], {}  4
  // [4], {4:0}
  
  // [4], {4:0}  5
  // [4,5], {4:0,5:1}
  
  // [4,5], {4:0,5:1} 6
  // [4,5,6], {4:0,5:1,6:2}
  return true 
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(!this.map.has(val)) return false

  let index = this.map.get(val)
  // [4,5,6,7], {4:0,5:1,6:2,7:3}, rm(5)
  // [4,5,6,7], {4:0,5:1,6:2,7:3}  i=1
  // [4,7,6,7], {4:0,5:1,6:2,7:3}  i=1
  // [4,7,6], {4:0,5:1,6:2,7:3}  i=1
  // [4,7,6], {4:0,5:1,6:2,7:1}  i=1
  let last = this.arr[this.arr.length - 1]
  this.arr[index] = this.arr[this.arr.length-1]
  this.arr.pop()
  this.map.set(last, index)
  this.map.delete(val)
  return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let rand = Math.floor(this.arr.length * Math.random())
  return this.arr[rand]    
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */