//Функция конвертации десятичной системы в двоичную
export function decimalToBinary(number) {
    let convertedBinary = [];
    while (number >= 1) {
        let newArray = [];
        newArray.push(number % 2);
        number = Math.floor(number / 2);

        for (var i = 0; i < convertedBinary.length; i++) {
            newArray.push(convertedBinary[i]);
        }
        convertedBinary = newArray;
        newArray= [];
    }
   return convertedBinary.join('')
}

//Функция конвертации двоичной системы в десятичную
export function binaryToDecimal(str) {
    let convertedDecimal = null;
    const input = String(str);
    const binary = String(str)
      .split('')
      .filter(i => i === '1' || i === '0');

    convertedDecimal = binary.reduce((acc, curr, index, arr) => {
        if (input.length !== binary.length) {
            return convertedDecimal ='Вы вписали не двоичный код! Исправьте пожалуйста';
        }
        return acc + Number(curr) * Math.pow(2, arr.length - 1 - index);
    }, 0);

    return convertedDecimal
  }