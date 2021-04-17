
//Функция конвертации десятичной системы в двоичную
let convertedBinary = [];
export function decimalToBinary(number) {
    while (number >= 1) {
        convertedBinary.unshift(number % 2);
        number = Math.floor(number / 2);
    }
    console.log(convertedBinary.join(''))
}

//Функция конвертации двоичнои системы в десятичную
let convertedDecimal = null;
export function binaryToDecimal(str) {
    const input = String(str);
    const binary = String(str)
      .split('')
      .filter(i => i === '1' || i === '0');

    // Валидация на двоичную систему
    if (input.length !== binary.length) {
      convertedDecimal ='Это не двоичный код';
      return;
    }
  
    convertedDecimal = binary.reduce((acc, curr, index, arr) => {
      return acc + Number(curr) * Math.pow(2, arr.length - 1 - index);
    }, 0);
    console.log(convertedDecimal)
  }
