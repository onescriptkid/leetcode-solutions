/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    let arr = str;
    let words = [];
    let word = "";
    for(char of str) {
        if(char.match(/[^\s]/)) {
            word = word + char;
        } else if(word == '') {
            word = '';
        } else {
            words.push(word);
            word = '';
        }
    }
    console.log(words)
    if(word != ''){
        words.push(word);
    }
    let reversed;
    if(words != 0) {
        reversed = words.reverse().join(' ');   
    } else {
        reversed = '';
    }
    return reversed;
};