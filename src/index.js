module.exports = function toReadable (number) {
   
let numbersReadable = {
    0: 'zero',
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    10:'ten',
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    14:'fourteen',
    15:'fifteen',
    16:'sixteen',
    17:'seventeen',
    18:'eighteen',
    19:'nineteen',
};
    if (20 <= number) {
       let  dozens = {
            20:'twenty',
            30:'thirty',
            40:'forty',
            50:'fifty',
            60:'sixty',
            70:'seventy',
            80:'eighty',
            90:'ninety',
};
const numb = String(number).split('');
if (numb.length === 2)
if (number % 10 == 0) {
    return dozens[number];
} else {
    if (numb[0]== 2){
    return 'twenty' + ' ' + numbersReadable[numb[1]];
}

if (numb[0]== 3){
    return 'thirty' + ' ' + numbersReadable[numb[1]];
}
 if (numb[0]== 4){
    return 'forty' + ' ' + numbersReadable[numb[1]];
}
 if (numb[0]== 5){
    return 'fifty' + ' ' + numbersReadable[numb[1]];
}
 if (numb[0]== 6){
    return 'sixty' + ' ' + numbersReadable[numb[1]];
}
 if (numb[0]== 7){
    return 'seventy' + ' ' + numbersReadable[numb[1]];
}
 if (numb[0]== 8){
    return 'eighty' + ' ' + numbersReadable[numb[1]];
}
 if (numb[0]== 9){
    return 'ninety' + ' ' + numbersReadable[numb[1]];
}
}

if (numb.length === 3)
    if (number % 100 != 0){
        if (number % 10 === 0)
            if (numb[1] != 2) {
                if (numb[1] != 3) {
                    if (numb[1] == 4) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[40];
                    }  if (numb[1] == 5) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[50];
                    }
                    if (numb[1] == 6) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[60];
                    }
                    if (numb[1] == 7) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[70];
                    }
                    if (numb[1] == 8) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[80];
                    }
                    if (numb[1] == 9) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[90];
                    }} else {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[30];
                    }} else {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[20];
                    }

                    if (numb[1] == 0) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + numbersReadable[numb[2]];
                    }
                    if (numb[1] == 1) {
                        if (numb[2] == 0) {
                            return numbersReadable[parseInt(numb[0])] + ' hundred ' + numbersReadable[10];
                        }
                        if (numb[2] == 1) {
                            return numbersReadable[parseInt(numb[0])] + ' hundred ' + numbersReadable[11];
                        }
                        if (numb[2] == 2) {
                            return numbersReadable[parseInt(numb[0])] + ' hundred ' + numbersReadable[12];
                        }
                        if (numb[2] == 3) {
                            return numbersReadable[parseInt(numb[0])] + ' hundred ' + numbersReadable[13];
                        }
                        if (numb[2] == 4) {
                            return numbersReadable[parseInt(numb[0])] + ' hundred ' + numbersReadable[14];
                        }
                        if (numb[2] == 5) {
                            return numbersReadable[parseInt(numb[0])] + ' hundred ' + numbersReadable[15];
                        }
                        if (numb[2] == 6) {
                            return numbersReadable[parseInt(numb[0])] + ' hundred ' + numbersReadable[16];
                        }
                        if (numb[2] == 7) {
                            return numbersReadable[parseInt(numb[0])] + ' hundred ' + numbersReadable[17];
                        }
                        if (numb[2] == 8) {
                            return numbersReadable[parseInt(numb[0])] + ' hundred ' + numbersReadable[18];
                        }
                        if (numb[2] == 9) {
                            return numbersReadable[parseInt(numb[0])] + ' hundred ' + numbersReadable[19];
                        }
                    }
                    if (numb[1] == 2) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[20] + ' ' + numbersReadable[numb[2]];
                    }
                    if (numb[1] == 3) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[30] + ' ' + numbersReadable[numb[2]];
                    }
                    if (numb[1] == 4) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[40] + ' ' + numbersReadable[numb[2]];
                    }
                    if (numb[1] == 5) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[50] + ' ' + numbersReadable[numb[2]];
                    }
                    if (numb[1] == 6) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[60] + ' ' + numbersReadable[numb[2]];
                    }
                    if (numb[1] == 7) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[70] + ' ' + numbersReadable[numb[2]];
                    }
                    if (numb[1] == 8) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[80] + ' ' + numbersReadable[numb[2]];
                    }
                    if (numb[1] == 9) {
                        return numbersReadable[parseInt(numb[0])] + ' hundred ' + dozens[90] + ' ' + numbersReadable[numb[2]];
                    }
                } else {
                    return numbersReadable[parseInt(numb[0])] + ' hundred';
                }
        } else {
            return numbersReadable[number];
        }
};
