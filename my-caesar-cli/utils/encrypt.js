const encrypt = (key, str, action) => {
    const allLettersOrder = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const upperCaseLettersStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLettersStr = 'abcdefghijklmnopqrstuvwxyz';
    const newLetterArr = [];
    const alphabetLength = 26;
    const firstElemIndex = alphabetLength - key;

    function reorderLettersInStr(arr) {
        const lettersArr = arr.split('');
        for (let i = firstElemIndex; i < lettersArr.length; i++) {
            newLetterArr.push(lettersArr[i])
        }
        for (let i = 0; i < firstElemIndex; i++) {
            newLetterArr.push(lettersArr[i])
        }
    }

    reorderLettersInStr(upperCaseLettersStr)
    reorderLettersInStr(lowerCaseLettersStr)

    const newLetterOrder = newLetterArr.join('');

    if (action === 'encode') {
        const index = x => newLetterOrder.indexOf(x);
        const translate = x => index(x) > -1 ? allLettersOrder[index(x)] : x;
        return str.split('').map(translate).join('');
    }
    if (action === 'decode') {
        const index = x => allLettersOrder.indexOf(x);
        const translate = x => index(x) > -1 ? newLetterOrder[index(x)] : x;
        return str.split('').map(translate).join('');
    }
}

module.exports = { encrypt };