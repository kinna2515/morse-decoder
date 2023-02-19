const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let res = '';
    for (i = 0; i < expr.length; i = i + 10) {
        let morze = '';
        if (expr.substring(i, i + 10) == '**********') {
            res += ' '
        } else {
            for (j = 0; j < 10; j = j + 2) {
                let pair = expr.substring(i + j, i + j + 2)
                if (pair == '00') {

                } else if (pair == '10') {
                    morze += '.'
                } else if (pair == '11') {
                    morze += '-'
                } else if (pair == '**') {
                    morze += ' '
                }
            }
            res += MORSE_TABLE[morze]
        }

    }
    return res;


}


module.exports = {
    decode
}