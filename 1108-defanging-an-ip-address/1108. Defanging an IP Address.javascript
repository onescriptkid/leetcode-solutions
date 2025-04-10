/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let defang = ""

  for(let i = 0; i < address.length; i++) {
    let c = address[i]
    if(c === ".") {
      defang+='[.]'
    } else {
      defang+=c
    }
  }
  return defang
};