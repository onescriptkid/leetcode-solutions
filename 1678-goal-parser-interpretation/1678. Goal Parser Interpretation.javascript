/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let i = 0
  let str = ""
  while(i < command.length) {
    if(command[i] === "G") {
      str+='G'
      i++
    } else if(command.substring(i, i+2) === "()") {
      str+='o'
      i+=2
    } else if(command.substring(i, i+4) === "(al)") {
      str+='al'
      i+=4
    }
  }
  return str
};