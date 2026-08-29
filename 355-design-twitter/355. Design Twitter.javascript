
var Twitter = function() {
  this.follows = new Map()  // followee -> set of followers
  this.tweets = new Map()  // userId -> list of tweets?
  this.count = 0
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  if(this.tweets.get(userId) === undefined) {
    this.tweets.set(userId, [])
  }
  this.tweets.get(userId).push([this.count, tweetId])
  this.count++ 
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  if(this.follows.get(userId) === undefined) {
    this.follows.set(userId, new Set([]))
  }
  this.follows.get(userId).add(userId)

  let maxheap = new PriorityQueue((a,b) => a[0] > b[0] ? -1 : 1)

  for(let follow of this.follows.get(userId)) {
    let tweets = this.tweets.get(follow)
    if(tweets !== undefined && tweets.length > 0) {
      let [count, tweetId] = tweets[tweets.length - 1]
      maxheap.push([count, tweetId, tweets.length - 1, follow])
    }
  }

  let out = []
  while(maxheap.size() > 0 && out.length < 10) {
    let [count, tweetId, index, follow] = maxheap.pop()
    out.push(tweetId)

    let tweets = this.tweets.get(follow)
    if(tweets[index-1] !== undefined) {
      let [ncount, ntweetId] = tweets[index-1]
      maxheap.push([ncount, ntweetId, index-1, follow])
    }
  }

  return out
    
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if(this.follows.get(followerId) === undefined) {
    this.follows.set(followerId, new Set())
  }
  this.follows.get(followerId).add(followeeId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  this.follows.get(followerId)?.delete(followeeId)
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */