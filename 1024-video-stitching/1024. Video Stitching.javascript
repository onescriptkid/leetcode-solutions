/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
  clips.sort((a,b) => a[0] > b[0] ? 1 : -1)

  let st = 0
  let end = 0
  let i = 0
  let count = 0
  while(st < time) {

    while(i < clips.length && clips[i][0] <= st) {
      end = Math.max(end, clips[i][1])
      i++
    }

    if(st === end) return -1

    st = end
    count++
  }
  return count
};