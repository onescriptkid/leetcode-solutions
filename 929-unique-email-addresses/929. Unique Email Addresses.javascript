/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let out = new Set()
  for(let email of emails) {
    let [user, domain] = email.split('@')
    let [name] = user.split('+')

    let nameNoDot = ""
    for(let c of name) {
      if(c !== ".") nameNoDot+=c
    }
  

    let fmtemail = `${nameNoDot}@${domain}`
    out.add(fmtemail)
  }   
  // console.log(out)

  return out.size
  // return [...out]
};