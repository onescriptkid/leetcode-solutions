
var MedianFinder = function() {
  this.minheap = new PriorityQueue((a,b) => a > b ? 1 : -1)  
  this.maxheap = new PriorityQueue((a,b) => a > b ? -1: 1)
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if(this.minheap.size() === 0) {
    this.minheap.push(num)
  } else if(num < this.maxheap.front()) {
    this.maxheap.push(num)
  } else {
    this.minheap.push(num)
  }

  if(this.minheap.size()-1 > this.maxheap.size()) {
    this.maxheap.push(this.minheap.pop())
  }

  if(this.maxheap.size() > this.minheap.size()) {
    this.minheap.push(this.maxheap.pop())
  }

 // []  [5,6]
 // [2] [5]
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let total = this.minheap.size() + this.maxheap.size()

  if(total % 2 === 0) {
    return (this.minheap.front() + this.maxheap.front()) / 2
  } else {
    return this.minheap.front()
  }
    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */