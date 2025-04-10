
var MedianFinder = function() {
  this.maxheap = new MaxPriorityQueue()
  this.minheap = new MinPriorityQueue()    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
   // [2 4]
  if(num < this.maxheap.front()) {
    this.maxheap.enqueue(num)
  } else {
    this.minheap.enqueue(num)
  }

  if((this.maxheap.size() - 1) > this.minheap.size()) {
    this.minheap.enqueue(this.maxheap.dequeue())
  }
  if(this.minheap.size() > this.maxheap.size()) {
    this.maxheap.enqueue(this.minheap.dequeue())
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let len = this.maxheap.size() + this.minheap.size()

  if(len % 2 === 0) {
    return (this.maxheap.front() + this.minheap.front()) / 2
  } else {
    return this.maxheap.front()
  }
  
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */