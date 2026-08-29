class Node {
  constructor(key, value) {
    this.key = key
    this.val = value
  }
}
class DLL {
  constructor() {
    this.head = new Node()
    this.tail = new Node()
    this.head.next = this.tail
    this.tail.prev = this.head
  }
  add(node) {
    //     <-node->
    // h->         <-tmp->
    let tmp = this.head.next
    node.prev = this.head
    node.next = tmp
    this.head.next = node
    tmp.prev = node
  }
  remove(node) {
    node.next.prev = node.prev
    node.prev.next = node.next
  }
  removeTail() {
    if(this.isEmpty()) return null
    let rt = this.tail.prev 
    this.remove(rt)

    return rt
  }
  isEmpty() {
    return this.head.next === this.tail
  }
}

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.capacity = capacity
  this.size = 0
  this.lfucount = 0

  this.kv = {}
  this.countmap = {}
  this.freqmap = {}
  this.freqmap[0] = new DLL()
};

LFUCache.prototype.counter = function(key) {
  let node = this.kv[key]
  let freq = this.countmap[key]
  this.countmap[key]++
  this.freqmap[freq].remove(node)
  if(this.freqmap[freq+1] === undefined) {
    this.freqmap[freq+1] = new DLL()
  }
  this.freqmap[freq+1].add(node)

  if(this.lfucount === freq && this.freqmap[freq].isEmpty()) {
    this.lfucount++
  }
}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  if(this.kv[key] === undefined) return -1

  this.counter(key)

  return this.kv[key].val
};


/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if(this.kv[key] === undefined && this.capacity === this.size) {
    let list = this.freqmap[this.lfucount]
    let evict = list.removeTail()
    delete this.kv[evict.key]
    delete this.countmap[evict.key]
    this.size--
  }

  if(this.kv[key] === undefined) {
    let node = new Node(key, value)
    this.size++
    this.lfucount = 0

    this.kv[key] = node
    this.countmap[key] = 0
    this.freqmap[0].add(node)
  } else {
    this.kv[key].val = value
  }

  this.counter(key)
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */