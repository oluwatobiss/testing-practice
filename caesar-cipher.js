function caesar(string, shift) {
    let currentUnicode = [];
    let newUnicode = [];
    let newText = "";

    for(let i = 0; i < string.length; i++) {
        currentUnicode.push(string.codePointAt(i));

        let uppercase = /[A-Z]/.test(string[i]);
        let lowercase = /[a-z]/.test(string[i]);
        let plusShiftAmt = currentUnicode[i] + shift;
        let minusTwentySix = plusShiftAmt - 26;
        let plusTwentySix = plusShiftAmt + 26;

        while(uppercase && minusTwentySix > 90) {
            minusTwentySix -= 26;
        }

        while(lowercase && minusTwentySix > 122) {
            minusTwentySix -= 26;
        }

        while(uppercase && plusTwentySix < 65) {
            plusTwentySix += 26;
        }

        while(lowercase && plusTwentySix < 97) {
            plusTwentySix += 26;
        }

        if(uppercase && plusShiftAmt < 65) {
            newUnicode.push(plusTwentySix);
        } else if (uppercase && plusShiftAmt <= 90) {
            newUnicode.push(plusShiftAmt);
        } else if (uppercase && plusShiftAmt > 90) {
            newUnicode.push(minusTwentySix);
        } else if (lowercase && plusShiftAmt < 97) {
            newUnicode.push(plusTwentySix);
        } else if(lowercase && plusShiftAmt <= 122) {
            newUnicode.push(plusShiftAmt);
        } else if(lowercase && plusShiftAmt > 122) {
            newUnicode.push(minusTwentySix);
        } else {
            newUnicode.push(currentUnicode[i]);
        }

        newText += String.fromCodePoint(newUnicode[i]);
    }

    return newText;
}

export default caesar;