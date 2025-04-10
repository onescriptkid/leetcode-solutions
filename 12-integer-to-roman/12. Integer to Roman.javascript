/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let tmpNum = num;
    let numeral = ''
    
    // D
    while(tmpNum / 1000 >= 1) {
        numeral = numeral + 'M'
        tmpNum = tmpNum - 1000
    }
    while(tmpNum / 900 >= 1) {
        numeral = numeral + 'CM'
        tmpNum = tmpNum - 900
    }
    // M
    while(tmpNum / 500 >= 1) {
        numeral = numeral + 'D'
        tmpNum = tmpNum - 500
    }
    while(tmpNum / 400 >= 1) {
        numeral = numeral + 'CD'
        tmpNum = tmpNum - 400
    }
    // C
    while(tmpNum / 100 >= 1) {
        numeral = numeral + 'C'
        tmpNum = tmpNum - 100
    }
    while(tmpNum / 90 >= 1) {
        numeral = numeral + 'XC'
        tmpNum = tmpNum - 90
    }
    // L
    while(tmpNum / 50 >= 1) {
        numeral = numeral + 'L'
        tmpNum = tmpNum - 50
    }
    while(tmpNum / 40 >= 1) {
        numeral = numeral + 'XL'
        tmpNum = tmpNum - 40
    }
    // X
    while(tmpNum / 10 >= 1) {
        numeral = numeral + 'X'
        tmpNum = tmpNum - 10
    }
    while(tmpNum / 9 >= 1) {
        numeral = numeral + 'IX'
        tmpNum = tmpNum - 9
    }
    // V
    while(tmpNum / 5 >= 1) {
        numeral = numeral + 'V'
        tmpNum = tmpNum - 5
    }
    while(tmpNum / 4 >= 1) {
        numeral = numeral + 'IV'
        tmpNum = tmpNum - 4
    }
    while(tmpNum / 1 >= 1) {
        numeral = numeral + 'I'
        tmpNum = tmpNum - 1
    }
    return numeral
};