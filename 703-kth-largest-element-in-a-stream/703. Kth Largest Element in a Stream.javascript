/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  // [4 6 8]
  // 
  this.minheap = new MinPriorityQueue()
  this.k = k
  for(let num of nums) {
    this.add(num)
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  let top = this.minheap.front()
  if(this.minheap.size() < this.k) {
    this.minheap.enqueue(val)
  } else {
    // if(val > this.minheap.front()) {
      this.minheap.enqueue(val)
      this.minheap.dequeue()
    // }
  }
  // console.log('add', val, this.minheap.toArray(), this.minheap.size())

  return this.minheap.front()



  // this.maxheap.enqueue(val)
  // let tmp = []
  // for(let i = 0; i < this.k; i++) {
  //   tmp.push(this.maxheap.dequeue())
  // }
  // let kth = tmp[tmp.length - 1]
  // for(let num of tmp) {
  //   this.maxheap.enqueue(num)
  // }
  // return kth
    
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */