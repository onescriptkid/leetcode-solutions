/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {

  // let out = ""
  // ab cd ef g
  // ba cd fe g
  // let count = 0;
  // for(let i = 0; i < k && i < s.length; i++) {
  //   let c = s[k - i - 1]
  //   out+=c
  //   count++
  // }

  // for(let i = count; i < s.length; i++) {
  //   let c = s[i]
  //   out+=c
  // }
  // return out

  let rev = true
  let clusters = []
  let count = 0
  let cluster = ""
  for(let i = 0; i < s.length; i++) {

    cluster+=s[i]
    // if(count=== k)) {
    //   rev = !rev
    // }
    
    // if(rev) {

    //   // let c = s[i + k - 1]
    //   // out+=c
    // } else {
    //   // let c = s[i]
    //   // out+=c
    // }
    if(cluster.length === k) {
      clusters.push(cluster)
      count= 0
      cluster=""
    }
    count++
  }   
  if(cluster.length !==0) clusters.push(cluster)

  let out = []

  for(let i = 0; i < clusters.length; i++) {
    if(i % 2 === 1) {
      out.push(clusters[i])
    } else {
      let rev = ""
      let cluster = clusters[i]
      for(let j = 0; j < cluster.length; j++) {
        rev+=cluster[cluster.length - j - 1]
      }
      out.push(rev)
    }

  }
  // console.log(clusters)
  return out.join('')
};