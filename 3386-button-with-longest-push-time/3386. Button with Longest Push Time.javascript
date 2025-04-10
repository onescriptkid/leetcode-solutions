/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function(events) {

  let max;
  let maxbutton;
  for(let i = 0; i < events.length; i++) {
    let event = events[i]
    let [button, time] = event
    if(i === 0) {
      max = time
      maxButton = button
    } else {
      let [, ptime] = events[i - 1]

      let duration = time - ptime
      if(duration > max) {
        max = duration
        maxButton = button
      } else if(duration === max) {
        if(button < maxButton) {
          maxButton = button
        }
      }

    }
  }
  return maxButton
  
};