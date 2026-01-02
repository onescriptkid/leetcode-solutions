// Best solution - but no explanation

class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.prev = null;
    this.next = null;
  }
}

class DLL {
  constructor() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  add(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  removeTail() {
    if (this.isEmpty()) return null;
    const node = this.tail.prev;
    this.remove(node);
    return node;
  }

  isEmpty() {
    return this.head.next === this.tail;
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.lfucount = 0;

    this.kv = {};
    this.countmap = {};
    this.freqmap = {};
    this.freqmap[0] = new DLL();
  }
  get(key) {
    if (this.kv[key] === undefined) return -1;

    this.counter(key);

    return this.kv[key].val;
  }

  counter(key) {
    let freq = this.countmap[key];
    let node = this.kv[key];

    this.freqmap[freq].remove(node);
    this.countmap[key] = freq + 1;

    if (this.freqmap[freq + 1] === undefined) {
      this.freqmap[freq + 1] = new DLL();
    }
    this.freqmap[freq + 1].add(node);

    if (freq === this.lfucount && this.freqmap[freq].isEmpty()) {
      this.lfucount++;
    }
  }

  put(key, value) {
    if (this.capacity === 0) return;

    if (this.kv[key] === undefined && this.size === this.capacity) {
      let list = this.freqmap[this.lfucount];
      let evicted = list.removeTail();
      delete this.kv[evicted.key];
      delete this.countmap[evicted.key];
      this.size--;
    }

    if (this.kv[key] === undefined) {
      let node = new Node(key, value);
      this.kv[key] = node;
      this.countmap[key] = 0;
      this.freqmap[0].add(node);
      this.lfucount = 0;
      this.size++;
    } else {
      this.kv[key].val = value;
    }
    this.counter(key);
  }
}
