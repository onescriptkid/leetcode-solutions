
var TimeMap = function() {
  this.kv = new Map()    
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if(this.kv.get(key) === undefined) {
    this.kv.set(key, [[value, timestamp]])
  } else {
    this.kv.get(key).push([value, timestamp])
  }
    
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  let arr = this.kv.get(key)
  if(arr === undefined) return ''
  let value = ''
  let l = 0
  let r = arr.length - 1

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = arr[m]
    if(mid[1] <= timestamp) {
      value = mid[0]
      l = m +1
    } else {
      r = m - 1
    }
  }
  return value
    
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */