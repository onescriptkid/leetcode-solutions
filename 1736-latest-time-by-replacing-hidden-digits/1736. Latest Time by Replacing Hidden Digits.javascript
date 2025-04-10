/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {

  let [hh, mm] = time.split(':') 
  // 12:??
  let omm = ""
  let ohh = ""
  if(mm[0] === "?") {
    omm+=5
  } else {
    omm+=mm[0]
  }
  if(mm[1] === "?") { 
    omm+="9"
  } else {
    omm+=mm[1]
  }
  // ??
  if(hh[0] === "?" && hh[1] === "?") {
    ohh+="23"
  } else if(hh[0] !== "?" && hh[1] === "?") {
  // 1?
    if(hh[0] === "1") {
      ohh+="19"
    } else if(hh[0] === "2") {
      ohh+='23'
    } else {
      ohh+='09'
    }

  } else if(hh[0] === "?" && hh[1] !== "?") {
  // ?1
    if( Number(hh[1]) <= 3 ) {
      ohh+='2'
      ohh+=hh[1]
    } else {
      ohh+=1
      ohh+=hh[1]
    }
  } else {
    ohh+=hh
  }


  return `${ohh}:${omm}`
};